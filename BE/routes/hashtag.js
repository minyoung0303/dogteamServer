const express = require('express');
const router = express.Router();
const hashtagController = require('../controllers/hashtagController');

router.get('/recommend', hashtagController.recommendHashtags);

module.exprots = router;