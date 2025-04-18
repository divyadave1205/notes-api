const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


// For use this model in other files
module.exports = mongoose.model('Note', noteSchema);
