# Star Tracker

A full-stack Node.js, Express, and Sequelize application for cataloging and managing galaxies, stars, and planets. Star Tracker provides full CRUD functionality via both a RESTful API and a modern HTML5 UI. The application supports image uploads, robust database relationships, and is fully containerized using Docker for streamlined development and deployment.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Directory Structure](#directory-structure)
- [API Endpoints](#api-endpoints)
    - [Galaxies](#galaxies)
    - [Stars](#stars)
    - [Planets](#planets)
    - [StarsPlanets (Many-to-Many)](#starsplanets-many-to-many)
- [Frontend UI](#frontend-ui)
- [Image Uploads](#image-uploads)
- [Project Notes](#project-notes)

---

## Features

- REST API endpoints for Galaxies, Stars, Planets, and Star-Planet relationships
- HTML5 UI for managing all entities with modern styling
- File upload support for entity images (JPG, PNG)
- Full CRUD support from both API and frontend interface
- Sequelize ORM with MySQL backend
- Dockerized development environment for easy setup
- Image storage with live previews across all views

---

## Technologies Used

- Node.js / Express.js
- Sequelize ORM (v6)
- MySQL
- EJS (for UI templating)
- Multer (for file uploads)
- Docker + Docker Compose
- HTML5 + CSS3

---

## Setup Instructions

1. **Clone the Repository**
     ```bash
     git clone https://github.com/yourusername/star-tracker.git
     cd star-tracker
     ```

2. **Start Dockerized Environment**
     ```bash
     docker compose up --build
     ```
     The app will be available at: [http://localhost:8080](http://localhost:8080)

3. **Apply Database Migrations (in Node container)**
     ```bash
     docker exec -it wdv442-node npx sequelize-cli db:migrate
     ```

---

## Directory Structure

```
.
├── controllers/         # UI and API logic
├── models/              # Sequelize models
├── migrations/          # Database schema migrations
├── routes/              # Express route definitions
├── public/uploads/      # Uploaded images
├── views/               # EJS UI templates
├── config/              # Sequelize and DB config
├── docker-compose.yml   # Docker multi-container setup
├── index.js             # Express server entry point
```

---

## API Endpoints

### Galaxies

| Action   | Method | Route           |
|----------|--------|----------------|
| Create   | POST   | /galaxies      |
| Read All | GET    | /galaxies      |
| Read One | GET    | /galaxies/:id  |
| Update   | PUT    | /galaxies/:id  |
| Delete   | DELETE | /galaxies/:id  |

### Stars

| Action   | Method | Route        |
|----------|--------|-------------|
| Create   | POST   | /stars      |
| Read All | GET    | /stars      |
| Read One | GET    | /stars/:id  |
| Update   | PUT    | /stars/:id  |
| Delete   | DELETE | /stars/:id  |

### Planets

| Action   | Method | Route         |
|----------|--------|--------------|
| Create   | POST   | /planets     |
| Read All | GET    | /planets     |
| Read One | GET    | /planets/:id |
| Update   | PUT    | /planets/:id |
| Delete   | DELETE | /planets/:id |

### StarsPlanets (Many-to-Many)

| Action      | Method | Route               |
|-------------|--------|--------------------|
| Create Link | POST   | /starsplanets      |
| Read All    | GET    | /starsplanets      |
| Read One    | GET    | /starsplanets/:id  |
| Update Link | PUT    | /starsplanets/:id  |
| Delete Link | DELETE | /starsplanets/:id  |

---

## Frontend UI

- `/galaxies-ui` – View, create, update, and delete galaxies
- `/stars-ui` – View, create, update, and delete stars
- `/planets-ui` – View, create, update, and delete planets

Each UI route supports:
- Image display and preview
- Live linking of relationships (e.g., Star to Galaxy, Planet to Star)
- Uniform, modern layout with reusable styles

---

## Image Uploads

- Uploads are stored in `public/uploads/`
- Each Galaxy, Star, and Planet can have one image
- Images display in all list and detail views
- Uploads handled using Multer middleware

---

## Project Notes

- The application is designed for extensibility and can be adapted to other astronomical or cataloging use cases.
- All code is modular and follows best practices for maintainability.
- Contributions and suggestions are welcome via pull requests or issues on the repository.
