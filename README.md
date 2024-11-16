# Foodiee Indian Food Chatbot

## Overview
This chatbot help users search and discover new indian recipes, implementing React frontend and Node.js backend

## Project Structure
Project Structure

1. Frontend (React):
   1. File: App.js
   2. Component: ChatbotComponent.js , Header.js, InputSection.js, Message.js, MessageSection.js , TextMessage.js
   3. Interaction: Users can communicate with the chatbot to get recipes.
2. Backend (Node.js with Express and Socket.IO):
   1. File: recipe.js
   2. Server: Express with Socket.IO for real-time communication
   3. Interaction: Handles incoming messages from the client, processes them using the findAnswer function, and sends back recipe information.

## Installation

1. Backend Dependencies:
   1. Open a terminal in the project's root directory.
   2. Run the following command to install the necessary backend dependencies:
   ``` 
   cd backend-socket.io
   npm install express socket.io
   ```

2. Frontend Dependencies:
   1. Navigate to the frontend directory (or the directory containing your React app).
   2. Run the following command to install frontend dependencies:
   ```
   cd frontend-react
   npm install
   ```

## Running the Application

1. Backend:
   1. In the root directory, run the following command to start the backend server:
   ```
   cd backend-socket.io
   node recipe.js
   ```
   2. The server will start running on port 3000. You should see a message indicating that the server is listening.

2. Frontend:
   1. Navigate to the frontend directory (or the directory containing your React app).
   2. Run the following command to start the React development server:
   ```
   cd frontend-react
   npm start
   ```
   3. The React app will be available in your browser at 
   ```
   http://localhost:3000.
   ```
## Usage

1. Open your web browser and go to http://localhost:3000 to interact with the Recipe Chatbot.
2. Type messages in the chat to inquire about recipes. The chatbot will respond with recipe information based on the user's queries.
