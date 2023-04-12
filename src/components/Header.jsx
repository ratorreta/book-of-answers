import React, { useState, useEffect } from "react";

function Header() {
  const date = new Date();
  const dateFormat = date.toLocaleString("en-us", {
    day: "numeric",
    month: "short"
  });

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const now = date.toLocaleTimeString("en-US", { hourCycle: "h23" });

  const [time, setTime] = useState(now);

  useEffect(() => {
    const secTimer = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        hourCycle: "h23"
      });

      setTime(newTime);
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div className="header">
      <h3>MyAnswersBook</h3>
      <p>
        {dateFormat}, {weekday[date.getDay()]} | {time}
      </p>
    </div>
  );
}

export default Header;
