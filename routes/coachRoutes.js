// routes/coachRoutes.js

const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coachController');

// GET /api/coach/suggestions
router.get('/suggestions', coachController.getCoachSuggestions);

module.exports = router;
