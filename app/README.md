# 📝 Blog Management Application

A full-stack Blog/Post Management Application built using **React, Express.js, Node.js, and MongoDB Atlas**.

The application allows users to create, view, update, and delete blog posts through a REST API.

---

## 🚀 Features

- Create a new blog post
- View all blog posts
- View an individual blog post
- Update an existing blog post
- Delete a blog post
- Store blog posts in MongoDB Atlas
- REST API using Express.js
- React frontend using the native `fetch()` API
- Responsive and user-friendly interface

---

## 🛠️ Technologies Used

### Frontend
- React
- JavaScript
- HTML
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB Node.js Driver
- CORS

### Database
- MongoDB Atlas
- MongoDB Compass for database inspection

### Development Tools
- VS Code
- Git
- GitHub
- Vite

---

## 📁 Project Structure

```text
blog-app/
│
├── app/
│   ├── src/
│   │   ├── components/
│   │   │   └── PostSummary.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Create.jsx
│   │   │   ├── Post.jsx
│   │   │   └── Archive.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── ...
│
├── server/
│   ├── db/
│   │   └── conn.mjs
│   │
│   ├── routes/
│   │   └── posts.mjs
│   │
│   ├── .env
│   ├── index.mjs
│   ├── loadEnvironment.mjs
│   ├── package.json
│   └── test-mongo.mjs
│
├── .gitignore
└── README.md
