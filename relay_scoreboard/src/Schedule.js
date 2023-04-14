import Header from "./Header";
import schedule from "../assets/schedule.jpg";
import "./Schedule.css";

const Schedule = () => {
    return (
      <div className="schedule-container">
        <div className="header">
            <Header />
        </div>
        <div className="schedule-image">
            <img src={schedule} alt="Schedule" />
        </div>
    </div>
    );
  };
  
export default Schedule;