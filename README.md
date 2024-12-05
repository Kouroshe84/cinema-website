Cinema Tickets Booking Backend 🎬🎟️

This is the backend API for a cinema ticket booking system, built using Node.js, Express.js, and MongoDB. The backend provides RESTful API endpoints for managing movies, showtimes, users, and tickets.

Table of Contents

	•	Features
	•	Technologies Used
	•	Installation
	•	Usage
	•	API Endpoints
	•	Folder Structure
	•	Future Enhancements
	•	Contributors

Features

	•	RESTful APIs for:
	•	Managing movies, showtimes, users, and tickets.
	•	CRUD operations for all entities.
	•	Integration with MongoDB for data storage.
	•	Modular architecture for scalability and maintainability.

Technologies Used

	•	Backend Framework: Node.js, Express.js
	•	Database: MongoDB (Atlas)
	•	Other Tools: dotenv (environment variables), Mongoose (ORM), Postman (API testing)

Installation

Prerequisites

	•	Node.js and npm installed
	•	MongoDB Atlas
	•	Git installed

Steps

	1.	Clone the repository: git clone https://github.com/your-username/cinema-tickets-backend.git cd cinema-tickets-backend
 	2.	Install dependencies: npm install
    3.	Set up your environment variables:
	   •	Create a .env file in the root directory with the following: MONGO_URI=your_mongo_db_connection_string, JWT_SECRET=your_jwt_secret_key, PORT
	4.	Start the server: npm run dev
 	5.	The backend will run at your specified port

Usage

	1.	Use tools like Postman or Insomnia to test API endpoints.
	2.	Integrate the backend with the frontend (or test standalone with mock data).

API Endpoints

Movies

	•	GET /api/movies: Get all movies
	•	POST /api/movies: Add a new movie
	•	GET /api/movies/:id: Get movie by ID
	•	PUT /api/movies/:id: Update movie by ID
	•	DELETE /api/movies/:id: Delete movie by ID

Showtimes

	•	GET /api/showtimes: Get all showtimes
	•	POST /api/showtimes: Add a new showtime
	•	GET /api/showtimes/:id: Get showtime by ID
	•	PUT /api/showtimes/:id: Update showtime by ID
	•	DELETE /api/showtimes/:id: Delete showtime by ID

Users

	•	GET /api/users: Get all users
	•	POST /api/users: Add a new user
	•	GET /api/users/:id: Get user by ID
	•	PUT /api/users/:id: Update user by ID
	•	DELETE /api/users/:id: Delete user by ID

Tickets

	•	GET /api/tickets: Get all tickets
	•	POST /api/tickets: Add a new ticket
	•	GET /api/tickets/:id: Get ticket by ID
	•	PUT /api/tickets/:id: Update ticket by ID
	•	DELETE /api/tickets/:id: Delete ticket by ID

Folder Structure

cinema-website/backend/
├── config/          # Database connection setup
├── controllers/     # Business logic for APIs
├── models/          # Mongoose schemas
├── routes/          # Express routes
├── middleware/      # Authentication and error handling
├── .env             # Environment variables
├── app.js           # Main Express application
├── package.json     # Backend dependencies

Future Enhancements

	•	Add user authentication using JWT for secure login and registration.
	•	Implement role-based access control (e.g., admin vs user).
	•	Add payment integration (e.g., PayPal, Stripe) for ticket bookings.
	•	Introduce real-time updates for seat availability.

Created by Kourosh Eftekhari
    
