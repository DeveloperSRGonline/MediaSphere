# MediaSphere

A full-stack video sharing application built with modern web technologies, enabling users to share, discover, and engage with video content seamlessly.

## 🚀 Features

- **User Authentication & Authorization**
- **Video Upload & Management**
- **Content Discovery & Search**
- **Secure Cookie-Based Sessions**
- **CORS-Enabled API**
- **MongoDB Integration**
- **Asynchronous Request Handling**
- **Standardized API Responses**

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v5.2.1) - Web framework
- **MongoDB & Mongoose** (v9.6.3) - Database & ODM
- **Nodemon** - Development server with auto-reload

### Middleware & Utilities
- **CORS** - Cross-Origin Resource Sharing
- **Cookie Parser** - Cookie handling
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
MediaSphere/
├── src/
│   ├── app.js                 # Express app configuration
│   ├── index.js               # Server entry point
│   ├── constants.js           # Application constants
│   ├── db/
│   │   └── db.js              # MongoDB connection setup
│   ├── controllers/           # Business logic handlers
│   ├── models/                # Database schemas
│   ├── routes/                # API endpoints
│   ├── middlewares/           # Custom middleware functions
│   └── utils/
│       ├── asyncHandler.js    # Async error handling wrapper
│       ├── ApiError.js        # Custom error class
│       └── ApiResponse.js     # Standardized response class
├── public/                    # Static assets
├── package.json
└── .env                       # Environment variables (not tracked)
```

## 🔧 Configuration & Setup

### Installed Dependencies

```json
{
  "devDependencies": {
    "nodemon": "^3.1.14",
    "prettier": "^3.8.3"
  },
  "dependencies": {
    "express": "^5.2.1",
    "mongoose": "^9.6.3",
    "cors": "^2.8.6",
    "cookie-parser": "^1.4.7",
    "dotenv": "^17.4.2"
  }
}
```

### Environment Variables Required

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
CORS_ORIGIN=http://localhost:3000
```

### Running the Application

```bash
# Install dependencies
npm install

# Development mode (with auto-reload)
npm run dev

# Production mode
node src/index.js
```

## 🏗️ Core Implementation Details

### Express App Configuration (`src/app.js`)
- **CORS**: Enabled for specified origins with credentials
- **Request Size Limits**: JSON and URL-encoded requests limited to 16KB
- **Static Files**: Public folder serves static assets
- **Cookie Management**: Enabled for session handling

### Database Connection (`src/db/db.js`)
- **Connection String**: `${MONGO_URI}/MediaSphere`
- **Error Handling**: Graceful error logging with process exit on failure
- **Connection Logging**: Displays MongoDB host information on successful connection

### Utility Classes

#### AsyncHandler (`src/utils/asyncHandler.js`)
Wrapper function for handling async route handlers and catching errors automatically.

```javascript
// Usage in controllers
const getVideos = asyncHandler(async (req, res) => {
    // Your async logic here
});
```

#### ApiError (`src/utils/ApiError.js`)
Custom error class for standardized error responses.

**Properties**: statusCode, message, errors array, success flag

#### ApiResponse (`src/utils/ApiResponse.js`)
Standardized response class for consistent API responses.

**Properties**: statusCode, data, message, success flag (auto-calculated)

## 📝 Development Standards

- **Code Formatting**: Prettier configured
- **Error Handling**: Centralized with AsyncHandler and ApiError
- **Response Format**: Standardized through ApiResponse class
- **Environment**: Development uses Nodemon for auto-reload

## 👤 Author

Shivam Garade

## 📄 License

ISC