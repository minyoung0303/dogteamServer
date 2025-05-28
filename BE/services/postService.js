const postModel = require('../models/postModel');

// 예시: 조회수 또는 좋아요 순으로 상위 n 개 게시글 추천
exports.getRecommendedPosts = async () => {
    const posts = await postModel.findAll({
        attributes: ['article_id', 'title', 'question', 'content', 'created_at', 'views', 'likes'],
        order: [
            ['likes', 'DESC'], // 좋아요순
            ['views', 'DESC'] // 조회수 순순
        ],
        limit: 5
    });
    return posts;
}