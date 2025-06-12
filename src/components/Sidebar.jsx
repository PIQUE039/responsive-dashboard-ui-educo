

import { useState } from "react"

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard")

  const menuItems = [
    { name: "Dashboard", icon: "📊", active: true },
    { name: "My Courses", icon: "📚" },
    { name: "My Classes", icon: "🎓" },
    { name: "Messages", icon: "💬" },
    { name: "Notifications", icon: "🔔", badge: 2 },
    { name: "Calendar", icon: "📅" },
    { name: "Community", icon: "👥" },
    { name: "Settings", icon: "⚙️" },
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">📚</div>
        <span className="logo-text">E D U C O</span>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`nav-item ${activeItem === item.name ? "active" : ""}`}
            onClick={() => setActiveItem(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
            {item.badge && <span className="badge">{item.badge}</span>}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
