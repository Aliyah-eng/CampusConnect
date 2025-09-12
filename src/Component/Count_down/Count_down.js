import React, { useState, useEffect } from "react";
import classes from './Count_down.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Count_down({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Countdown interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false, // animate on scroll every time
    });
    AOS.refresh();

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBoxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className={classes.countdown_section} data-aos="fade-up">
      <div className={classes.tittle_section}>
        <span className={classes.pre_tittle}>COUNTDOWN TO</span>
        <h1 className={classes.tittle}>CAMP CONNECT 2025</h1>
        <p className={classes.subtittle}>Hurray!! Your Voice Matters Soon!</p>
      </div>

      {timeLeft.days !== undefined ? (
        <div className={classes.countdown_timer}>
          {timeBoxes.map((box, index) => (
            <div
              key={index}
              className={classes.time_box}
              data-aos="zoom-in"          // individual animation
              data-aos-delay={index * 200} // stagger each box
            >
              {box.value}
              <span className={classes[`${box.label.toLowerCase()}_text`]}>
                {box.label}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className={classes.let_getStarted}>🎉 The event has started!</p>
      )}

      <button className={classes.register_btn}>REGISTRATION NOW</button>
    </section>
  );
}

export default Count_down;
