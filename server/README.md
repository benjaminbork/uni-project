# Restauranto Web App (Backend)

This repository contains the server-side logic and APIs for the Restaurant & Café Bookings Web App.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Feedback & Reporting Issues](#feedback-reporting-issues)


## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop)
- Either Docker Desktop or [Rancher Desktop](https://rancherdesktop.io)

Ensure that either Docker Desktop or Rancher Desktop is running before proceeding with the next steps.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Navigate to the backend directory:
   ```bash
   cd <server>
   ```
## Running the Server

1. First, start the Docker image:
   ```bash
   docker compose up
   ```
2. After the Docker image is running, start the server:
   ```bash
   npm run dev
   ```
#
This will initialize and start the backend server. Monitor the console for any potential issues or errors.


# API Documentation

## Table of API Contents

- [Reservations](#1-reservations)
- [Restaurants](#2-restaurants)
- [Reviews](#3-reviews)
- [Search](#4-search)
- [Users](#5-users)

---

## 1. Reservations

### Create a new reservation

- **Endpoint**: `/reservation`
- **Method**: `POST`

  **Body**:
  - `userId`: MongoDB ObjectId
  - `restaurantId`: Number
  - `time`: String (e.g., "15:30")
  - `dayOfWeek`: String (e.g., "Monday")

  **Responses**:
  - 200: Reservation was successful
  - 400: Invalid inputs or already reserved
  - 500: Server error

### Get availability for a restaurant

- **Endpoint**: `/reservation/availability/:restaurantId`
- **Method**: `GET`

  **Responses**:
  - 200: JSON object of available timeslots
  - 404: Restaurant not found
  - 500: Server error

### Get all bookings for a user

- **Endpoint**: `/reservation/bookings/:userId`
- **Method**: `GET`

  **Responses**:
  - 200: JSON array of booking details
  - 400: Invalid userId
  - 500: Server error

---

## 2. Restaurants

### Get list of all restaurants

- **Endpoint**: `/restaurant`
- **Method**: `GET`

  **Response**:
  - 200: JSON array of restaurant details
  - 500: Server error

---

## 3. Reviews

### Submit a review for a restaurant

- **Endpoint**: `/reviews/review`
- **Method**: `POST`

  **Body**:
  - `userId`: MongoDB ObjectId
  - `username`: String
  - `restaurantId`: Number
  - `review`: String
  - `rating`: Number (1 to 5)

  **Responses**:
  - 200: Review submission was successful
  - 400: Invalid inputs
  - 500: Server error

### Get all reviews for a restaurant

- **Endpoint**: `/reviews/:restaurantId`
- **Method**: `GET`

  **Responses**:
  - 200: JSON array of reviews
  - 500: Server error

---

## 4. Search

### Search for a restaurant by availability and/or criteria

- **Endpoint**: `/search`
- **Method**: `POST`

  **Body**:
  - `dayOfWeek`: String (e.g., "Monday")
  - `time`: String (e.g., "15:30")
  - `query`: String (Optional)

  **Responses**:
  - 200: JSON array of matching restaurants
  - 400: Invalid inputs
  - 500: Server error

---

## 5. Users

### Sign up a new user

- **Endpoint**: `/users/signup`
- **Method**: `POST`

  **Body**:
  - `username`: String
  - `password`: String

  **Responses**:
  - 200: User registration was successful
  - 500: Server error

### Log in as a user

- **Endpoint**: `/users/login`
- **Method**: `POST`

  **Body**:
  - `username`: String
  - `password`: String

  **Responses**:
  - 200: JSON object with token and user details
  - 400: Invalid credentials
  - 500: Server error

---

## Feedback & Reporting Issues

The Restauranto Web App.We value your feedback and appreciate any insights or reports of unexpected behavior.

For issues, or to provide feedback, please open an issue on the GitHub repository. We'll try to address it at the earliest convenience.

Thank you!



