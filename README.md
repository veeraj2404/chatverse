![alt text](frontend/public/image.png)

# Chatverse 

Chatverse is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Daisy UI, and Socket.IO. It enables seamless, instant messaging with dynamic chatrooms, robust WebSocket integration, and a modern, user-friendly interface.

# Tech Stack

## Frontend
    React.js, Tailwind CSS, Daisy UI

## Backend 
    Node.js, Express.js

## Database 
    MongoDB

## Real-time Communication
    Socket.IO

## Styling
    Tailwind CSS, Daisy UI


# Features

    Users can send and receive messages instantly using WebSockets.
    Secure user registration and login.
    Chat with individual users or in group chatrooms.
    A dynamic interface that works on all devices, powered by Tailwind CSS and Daisy UI.
    Instant notifications for new messages.
    Display online/offline status of users.

# Installation

## Clone the repository:

    https://github.com/veeraj2404/chatverse.git
    cd chatverse

## Install Backend Dependencies:

    cd backend
    npm install

## Install Frontend Dependencies:

    cd frontend
    npm install

## Setup Environment Variables:

Create a .env file in the backend directory and add:

    PORT=
    MONGODB_URL=
    JWT_SECRET=
    NODE_ENV="development"
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_SECRET_KEY=

## Run the Application:

Start the backend server:

    npm run dev
    http://localhost:5001

Start the frontend React app:

    npm  run dev
    http://localhost:5173
    