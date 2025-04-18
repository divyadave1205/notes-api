const express = require('express');
const router = express.Router();
const { createNote, getAllNotes , updateNote, deleteNote} = require('../controllers/notesController');

// POST /api/notes
router.post('/', createNote);

// GET /api/notes
router.get('/', getAllNotes);

// PUT /api/notes/:id
router.put('/:id', updateNote);     

// DELETE /api/notes/:id
router.delete('/:id', deleteNote);  

module.exports = router;
