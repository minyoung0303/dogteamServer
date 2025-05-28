exports.recommendHashtags = async (req, res) => {
    // 해시태그 추천
    const hashtags = ['#나눔', '#산책 및 외출', '#품종', '#나이', '#질병', '#도와주세요', '쪽지'];

    //랜덤 3개 호출
    const shuffled = hashtags.sort(() => 0.5 - Math.random());
    res.json(shuffled.slice(0, 3));
};