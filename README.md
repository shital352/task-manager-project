# Task Manager Project

This is a simple Task Manager application with a **Spring Boot backend** and a **Next.js frontend**.  
It allows users to **sign up**, **add tasks**, **update tasks**, **delete tasks**, and **view their tasks**.

---

## Project Structure

task-manager-project/
│
├── frontend/ # Next.js frontend
└── backend/task-manager-backend/ # Spring Boot backend

---

## Backend (Spring Boot)

### Requirements

- Java 17+
- Maven or Gradle
- H2 Database (in-memory)

### How to Run

1. Navigate to the backend folder:
   ```bash
   cd backend/task-manager-backend
   ```

./gradlew build # or mvn clean install

./gradlew bootRun # or mvn spring-boot:run

http://localhost:8080/h2-console

JDBC URL: jdbc:h2:./taskdb

Username: sa

Password: (leave empty)

API Endpoints

POST /auth/signup - Signup user

GET /tasks/{userId} - Fetch tasks for a user

POST /tasks/{userId} - Add a task

PUT /tasks/{taskId} - Update a task

DELETE /tasks/{taskId} - Delete a task

The backend uses H2 database in MySQL compatibility mode.

You can see all user and task data in the H2 console.

The frontend communicates with the backend via Axios API calls.

Make sure backend is running before starting the frontend.
