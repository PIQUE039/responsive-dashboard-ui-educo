const NewCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Content Writing",
      lessons: "12 Lessons",
      rate: 4.8,
      type: "Data Research",
      color: "#FFFFFF",
      bgcolor: "#F8E0D0",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
    },
    {
      id: 2,
      title: "Usability Testing",
      lessons: "15 Lessons",
      rate: 5.0,
      type: "UI/UX Design",
      color: "#FFFFFF",
      bgcolor:"#EBF7BC",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
    },
    {
      id: 3,
      title: "Photography",
      lessons: "8 Lessons",
      rate: 4.6,
      type: "Art and Design",
      color: "#FFFFFF",
      bgcolor:"#D7D9F0",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>,
    },
  ]

  return (
    <>
      <div className="section-header">
        <h2>New Courses</h2>
        <button className="view-all-btn">View All</button>
      </div>
    <section className="new-courses">
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card" style={{ backgroundColor: course.color }}>
            <div className="course-top-info">
                <div className="course-icon"style={{ backgroundColor: course.bgcolor }}>{course.icon}</div>
                <div className="course-ti-right">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-lessons">{course.lessons}</p>
                </div>
            </div>
            
            <div className="course-info">
              <div className="course-meta">
                <div className="course-rating">
                    <span className="type-label">Rating</span>
                <div className="rating">
                  <span className="star">⭐</span>
                  <span className="rate">{course.rate}</span>
                </div>
                </div>
                <div className="course-type">
                    <div className="type">
                        <span className="type-label">Type</span>
                        <span className="type-value">{course.type}</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default NewCourses
