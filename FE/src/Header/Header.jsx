function Header({ isLoggedIn, onLoginToggle }) {
    return (
        <header style={{ idsplay: 'flex', alignItems: 'center', padding: '10px 20px', background: '#fff', borderBottom: '1px solid #eee' }}>
            {/* 로고 내용 */}
            <img src="/logo.png" alt="로고" style={{ height: 40, marginRight: 20 }} />

            {/* 검색 바 */}
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                style={{ flex: 1, padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4 }}
            />

            {/* 로그인 토글 */}
            <button onClick={onLoginToggle} style={{ marginLeft: 20 }}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
        </header>
    );
}

export default Header;