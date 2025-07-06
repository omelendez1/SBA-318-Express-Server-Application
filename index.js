const express = require('express');
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

const app = express();
const PORT = 3000;

// In-memory movie storage
let movies = [];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Custom middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Home
app.get('/', (req, res) => {
  res.redirect('/movies');
});

// View all movies
app.get('/movies', (req, res) => {
  const genre = req.query.genre;
  const filteredMovies = genre ? movies.filter(m => m.genre === genre) : movies;
  res.render('movies/index', { movies: filteredMovies });
});

// Form to create new movie
app.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

// Add new movie
app.post('/movies', (req, res) => {
  const { title, genre, rating } = req.body;
  const newMovie = { id: uuid(), title, genre, rating };
  movies.push(newMovie);
  res.redirect('/movies');
});

// View single movie
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find(m => m.id === id);
  if (!movie) return res.status(404).send('Movie not found');
  res.render('movies/show', { movie });
});

// Form to edit movie
app.get('/movies/:id/edit', (req, res) => {
  const { id } = req.params;
  const movie = movies.find(m => m.id === id);
  if (!movie) return res.status(404).send('Movie not found');
  res.render('movies/edit', { movie });
});

// Update movie
app.patch('/movies/:id', (req, res) => {
  const { id } = req.params;
  const foundMovie = movies.find(m => m.id === id);
  if (!foundMovie) return res.status(404).send('Movie not found');
  const { title, genre, rating } = req.body;
  foundMovie.title = title;
  foundMovie.genre = genre;
  foundMovie.rating = rating;
  res.redirect(`/movies/${id}`);
});

// Delete movie
app.delete('/movies/:id', (req, res) => {
  movies = movies.filter(m => m.id !== req.params.id);
  res.redirect('/movies');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server start
app.listen(PORT, () => {
  console.log(`Watchlist Vault is running at http://localhost:${PORT}`);
});

