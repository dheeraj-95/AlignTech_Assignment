const express = require('express');
const bodyparser = require('body-parser');
const notesController = require('../controllers/notepadController');

const router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

// Create a new Note
router.post('/notes', notesController.create);

// Retrieve all Notes
router.get('/notes', notesController.findAll);

// Update a Note with noteId
router.put('/notes/:noteId', notesController.update);

module.exports = router