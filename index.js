const express = require('express');
const mongoose = require('mongoose');

// For use .env file's variables in this file
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());


// Routes
const noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT||3000, () => {
      console.log(`Server running on port ${process.env.PORT||3000}`);
    });
  })
  .catch(err => console.error("Mongo error:", err));
