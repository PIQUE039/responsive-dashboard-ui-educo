

import { useState } from "react";

const HoursActivity = () => {
  const activityData = [
    { day: "Su", hours: 4 },
    { day: "Sa", hours: 6 },
    { day: "Fr", hours: 2 },
    { day: "Th", hours: 6.75 },
    { day: "We", hours: 5 },
    { day: "Tu", hours: 1 },
    { day: "Mo", hours: 4.5 },
  ];

  const maxHours = 8;
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="hours-activity">
      <div className="section-header">
        <div className="sh-left">
            <h3 className="activity-title">Hours Activity</h3>
            <span className="trend-icon" style={{ marginRight: "4px", fontSize: "18px" }}>↗️</span>
            <span className="trend-text"><span className="p-l-nos">+3%</span> Increase than last week</span>
        </div>
        <div className="activity-controls">
          <select className="period-select">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>

      <div className="activity-chart" style={{ display: "flex", gap: "12px" }}>
        {/* Y-Axis Lines */}
        <div className="chart-y-axis" style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "space-between", height: "200px", marginRight: "8px", fontSize: "12px", color: "#999" }}>
          {[1, 2, 4, 6, 8].map((h) => (
            <span key={h}>{h}h</span>
          ))}
        </div>

        <div className="chart-bars" style={{
          display: "flex",
          alignItems: "flex-end",
          height: "200px",
          gap: "24px",
          position: "relative",
          transform: "rotate(180deg)",
          transformOrigin: "bottom",
          borderLeft: "1px solid #eee",
          paddingLeft: "12px",
          top:"-99%",
        }}>
          {activityData.map((data, index) => (
            <div
              key={index}
              className="bar-container"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Bar */}
              <div
                className={`activity-bar`}
                style={{
                  width: "14px",
                  height: `${(data.hours / maxHours) * 100}%`,
                  backgroundColor: hoverIndex === index ? "#8BC34A" : "#222",
                  borderRadius: "4px",
                  transition: "0.3s ease-in-out",
                  position: "relative",
                }}
              >
                {/* Tooltip on hover */}
                {hoverIndex === index && (
                  <div
                    className="activity-tooltip"
                    style={{
                      position: "absolute",
                      bottom: "100%",
                      left: "50%",
                      transform: "translateX(-50%) rotate(180deg)",
                      background: "#222",
                      color: "#fff",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      zIndex: 10
                    }}
                  >
                    <div>😎 {data.hours}h</div>
                    <div style={{ opacity: 0.8, fontSize: "11px" }}>5 Jan 2023</div>
                  </div>
                )}
              </div>

              
              <span
                className="bar-label"
                style={{
                  marginTop: "6px",
                  fontSize: "13px",
                  transform: "rotate(180deg)",
                  color: "#444"
                }}
              >
                {data.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoursActivity;


