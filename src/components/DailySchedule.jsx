const DailySchedule = () => {
  const scheduleItems = [
    {
      id: 1,
      title: "Design System",
      subtitle: "Lecture - Class",
      icon: "🎨",
      color: "#FFE4D6",
    },
    {
      id: 2,
      title: "Typography",
      subtitle: "Group - Test",
      icon: "📝",
      color: "#E6E6FA",
    },
    {
      id: 3,
      title: "Color Style",
      subtitle: "Group - Test",
      icon: "🎨",
      color: "#E8F5E8",
    },
    {
      id: 4,
      title: "Visual Design",
      subtitle: "Lecture - Test",
      icon: "👁️",
      color: "#FFF2E6",
    },
  ]

  return (
    <>
    <section className="daily-schedule">
      <h3 className="daily-activity-title">Daily Schedule</h3>

      <div className="schedule-list">
        {scheduleItems.map((item) => (
          <div key={item.id} className="schedule-item">
            <div className="schedule-icon" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
            <div className="schedule-content">
              <h4 className="schedule-title">{item.title}</h4>
              <p className="schedule-subtitle">{item.subtitle}</p>
            </div>
            <button className="schedule-arrow">→</button>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default DailySchedule
