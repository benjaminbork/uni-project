# Restauranto Web App (Frontend)

This repository contains the frontend logic for the Restaurant & Café Bookings Web App.

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Running the Client](#client)
- [Technology Decisions](#technology-decions)
- [Feedback & Reporting Issues](#feedback-reporting-issues)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Navigate to the client directory:

   ```bash
   cd <client>
   ```

3. Install node modules:

   ```bash
   npm i
   ```

## Running the Client

1. Start the client:
   ```bash
   npm run start
   ```

## Technology Decisions

- State Managment: React Query
  React Query can make the code more readiable and is a reliable for remote state management

- UI Library: MUI
  Material UI provides a great theme provider, a lot of components and easy way to design the layout of the website.

  - Form Management: Formik and Yup
    Formik works perfect with Material UI's Text- and Formfields.

  - Routing: React Router
    Realiable way to handle the routes in the frontend.

## Feedback & Reporting Issues

We value your feedback and appreciate any insights or reports of unexpected behavior.

For issues, or to provide feedback, please open an issue on the GitHub repository. We'll try to address it at the earliest convenience.

Thank you!
