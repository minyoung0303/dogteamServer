import React, { useState } from 'react';

const dummyHashtags = ['#나눔', '#산책 및 외출', '#품종', '#나이', '#질병', '#도와주세요', '쪽지'];

function HashtagRecommend(){
    const [hashtags, setHashtags] = useState([]);

    const handleRecommend = () => {
        // 더미 해시태그 랜덤 추천
        const shuffled = dummyHashtags.sort(() => 0.5 - Math.random());
        setHashtags(shuffled.slice(0, 3));
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <button onClick={handleRecommend}> 해시태그 추천 </button>
            <div style={{ marginTop: 10 }}>
                {hashtags.map((tag, idx) => (
                    <span key={idx} style={{ marginRight: 8 }}>{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default HashtagRecommend;