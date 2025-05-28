const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// 추천글 미리보기 카드용 API
router.get('/recommend', postController.getRecommendedPosts);

module.exports = router;