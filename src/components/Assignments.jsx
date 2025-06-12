const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: "Methods of data",
      date: "02 July, 10:30 AM",
      status: "In progress",
      avatars: ["👤"],
      color: "#E8F5E8",
      bgcolor: "#D7D8F2",
    },
    {
      id: 2,
      title: "Market Research",
      date: "14 June, 12:45 AM",
      status: "Completed",
      avatars: ["👤"],
      color: "#E8F5E8",
      bgcolor: "#EDF9C0",
    },
    {
      id: 3,
      title: "Data Collection",
      date: "12 May, 11:00 AM",
      status: "Upcoming",
      avatars: ["👤"],
      color: "#FFE4D6",
      bgcolor: "#F9E0CF",
    },
  ]

  return (
    <>
      <div className="section-header">
        <h3>Assignments</h3>
        <button className="add-btn">+</button>
      </div>
    <section className="assignments">

      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="assignment-item">
            <div className="assignment-avatars">
              {assignment.avatars.map((avatar, index) => (
                <div key={index} className="assignment-avatar" style={{ backgroundColor: assignment.color }}>
                  {avatar}
                </div>
              ))}
            </div>

            <div className="assignment-content">
              <h4 className="assignment-title">{assignment.title}</h4>
              <p className="assignment-date">{assignment.date}</p>
            </div>

            <div className={`assignment-status ${assignment.status.toLowerCase().replace(" ", "-")}`}>
              {assignment.status}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Assignments
