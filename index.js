const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// For use .env file's variables in this file
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Use CORS middleware
app.use(cors({
    'origin': 'http://localhost:5122',
}));

// Routes
const noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error("Mongo error:", err));
