const CourseProgress = () => {
  const courses = [
    {
      id: 1,
      title: "3D Design Course",
      instructor: "Micheal Andrew",
      remaining: "8h 45 min",
      progress: 45,
      color: "#E6E6FA",
      avatar: "👤",
    },
    {
      id: 2,
      title: "Development Basics",
      instructor: "Natalia Varnan",
      remaining: "18h 12 min",
      progress: 75,
      color: "#FFE4D6",
      avatar: "👤",
    },
  ]

  return (
    <>
      <div className="section-header">
        <h3>Course You're Taking</h3>
        <div className="controls">
          <select className="status-select">
            <option>Active</option>
            <option>Completed</option>
          </select>
          <button className="add-btn">+</button>
        </div>
      </div>
    <section className="course-progress">

      <div className="progress-list">
        {courses.map((course) => (
          <div key={course.id} className="progress-item">
            <div className="course-icon-cc" style={{ backgroundColor: course.color }}>
              📚
            </div>

            <div className="course-details">
                <div className="detail-container">

                    <h4 className="course-name">{course.title}</h4>
                    <div className="instructor-info">
                        <span className="instructor-avatar">{course.avatar}</span>
                        <span className="instructor-name">{course.instructor}</span>
                    </div>
                </div>
              <div className="remaining-time">
                <span className="time-label">Remaining</span>
                <span className="time-value">{course.remaining}</span>
              </div>
            </div>

            <div className="progress-info">

              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span className="progress-percentage">{course.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default CourseProgress
