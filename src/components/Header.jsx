const Header = () => {
  return (
    <header className="header">
      <div className="welcome-section">
        <h1 className="welcome-text">Welcome back Taylor 👋</h1>
      </div>

      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Search courses" className="search-input" />
          <span className="search-icon">🔍</span>
        </div>

        <div className="profile-avatar">
          <img
            src="./src/assets/profile_pic1.jpg"
            alt="Profile"
            className="avatar-image"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
