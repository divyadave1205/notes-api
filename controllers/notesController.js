const Note = require('../models/Note');

// 👉 Create new note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const note = await Note.create({ title, content });

    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// 👉 Get all notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Note.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
};
