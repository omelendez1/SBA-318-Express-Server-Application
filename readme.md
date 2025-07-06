# 🎬 Watchlist Vault

A simple Node.js and Express application that allows users to manage a personalized movie watchlist. Built as part of a back-end development assessment, this project demonstrates RESTful API design, custom middleware usage, view rendering with EJS, and data manipulation using in-memory storage.

---

## 📌 Features

- Add, view, edit, and delete movies from a personal watchlist.
- RESTful API structure for data management.
- Server-rendered HTML views using the EJS template engine.
- Form submission from client-side to interact with the API.
- Custom and error-handling middleware for enhanced server functionality.
- Static file serving (CSS).
- Organized codebase with separation of concerns.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- EJS
- UUID
- HTML/CSS

---

Access the App

Visit http://localhost:3000 in your browser.

🔧 API Endpoints
Method	Endpoint	Description
GET	/movies	View all movies
POST	/movies	Add a new movie
GET	/movies/:id	View one movie by ID
PATCH	/movies/:id	Edit movie details
DELETE	/movies/:id	Delete a movie
GET	/movies?genre=	Filter movies by genre (query)
GET /users             → View all registered users

🧪 Future Improvements
A user form was not added due to limited time.
Currently, users are displayed but not created through the app.
In the future, I plan to add a form to let users register from the front end.
# SBA-318-Express-Server-Application


