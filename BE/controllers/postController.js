const postService = require('../services/postService');

exports.getRecommendedPosts = async (req, res) => {
  try {
    const posts = await postService.getRecommendedPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};