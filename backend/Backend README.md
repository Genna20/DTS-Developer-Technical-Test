# Task Manager Backend API

This is the backend API for the Task Manager system, built with Node.js, Express, and SQLite.

## 🚀 Features
- Create, retrieve, update, and delete tasks
- Basic validation and error handling
- In-memory SQLite database

## 🛠 Tech Stack
- Node.js
- Express.js
- SQLite3
- Nodemon (for development)

## 📂 How to Run

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. The API will run at:
   ```
   http://localhost:5000
   ```

## 📑 API Endpoints

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| POST   | /tasks        | Create a new task     |
| GET    | /tasks        | Get all tasks         |
| GET    | /tasks/:id    | Get task by ID        |
| PATCH  | /tasks/:id    | Update task status    |
| DELETE | /tasks/:id    | Delete a task         |

## ✅ Example Task JSON
```json
{
  "title": "Finish project",
  "description": "Complete technical test",
  "status": "pending",
  "dueDate": "2025-05-01T15:00"
}
```

## 🧪 Running Tests

1. Install dev dependencies:
   ```bash
   npm install --save-dev jest supertest
   ```
2. Run tests:
   ```bash
   npm test
   ```

---

