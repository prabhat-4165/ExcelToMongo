# ExcelToMongo

ExcelToMongo is a web application that allows users to upload Excel files, converts the data into JSON, and stores it in a MongoDB database. The application is built with Node.js, React.js, and MongoDB.

## Features

- Upload Excel files
- Convert Excel data to JSON format
- Store JSON data in a MongoDB database
- Backend endpoints for data retrieval and processing

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Handling**: xlsx package

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prabhat-4165/ExcelToMongo.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ExcelToMongo
   ```

3. **Install dependencies:**

   - **Frontend:**

     ```bash
     cd client
     npm install
     ```

   - **Backend:**
     ```bash
     cd ..
     npm install
     ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=<your_mongodb_connection_url>
   PORT=5000
   ```

   Create a `.env` file in the client directory and add the following:

   ```
   REACT_APP_API_URL = http://localhost:5000/api
   ```

5. **Start the application:**

   - **Backend:**

     ```bash
     cd server
     npm start
     ```

   - **Frontend:**
     ```bash
     cd client
     npm start
     ```

6. Open your browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

### Backend

- **POST /uploadData**

  - Description: Upload JSON data to MongoDB.
  - Request Body: JSON object with parsed Excel data.

- **GET /collectionDetails**
  - Description: Retrieve all data stored in MongoDB.

## Usage

1. Upload an Excel file through the frontend interface.
2. The application will parse the file, convert it to JSON, and send the data to the backend.
3. The backend stores the data in the MongoDB database.
4. Use the `/collectionDetails` endpoint to view the stored data.

## Project Structure

```
ExcelToMongo/
├── client/            # Frontend React application
├── root               # Frontend, Backend Node.js and Express application
├── .gitignore         # Ignored files and folders
├── README.md          # Project documentation
```

---

For more details, visit the [GitHub Repository](https://github.com/prabhat-4165/ExcelToMongo).
