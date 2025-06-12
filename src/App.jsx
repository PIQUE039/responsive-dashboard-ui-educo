import Sidebar from "./components/sidebar.jsx"
import Header from "./components/header.jsx"
import NewCourses from "./components/newcourses.jsx";
import HoursActivity from "./components/HoursActivity.jsx";
import DailySchedule from "./components/DailySchedule";
import CourseProgress from "./components/CourseProgress.jsx";
import Calendar from "./components/Calendar.jsx";
import Assignments from "./components/Assignments.jsx";

function App() {
  return(
    <>
      <div className="dashboard-container">
        <div className="left-dc"><Sidebar/></div>
        <div className="main-rc">
            <Header/>
        <div className="activity-container">
          <div className="middle-dc">
            <NewCourses/>
          <div className="schedule-container">
            <HoursActivity/>
            <DailySchedule/>
          </div>
            <CourseProgress/>
          </div>
          <div className="right-dc">
            <Calendar/>
            <Assignments/>
          </div>
        </div>
        </div>
      </div>
        
    </>
  );
}

export default App
