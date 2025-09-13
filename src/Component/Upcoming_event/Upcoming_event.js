import React, { useEffect } from 'react';
import classes from './Upcoming_event.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cartData = [
  {
    id: 1,
    title: "Freshers’ Welcome Party",
    date: "20 Sep 2025, 6:00 PM",
    venue: "Main Auditorium",
    img: "https://cdn.culture.ru/images/bb915d39-7cfb-5bfc-b2a3-65c92f27e8d2"
  },
  {
    id: 2,
    title: "TechFest 2025",
    date: "10 Oct 2025, 9:00 AM",
    venue: "Innovation Hub",
    img: "https://wbn.co.nz/wp-content/uploads/2020/02/Techfest.jpg"
  },
  {
    id: 3,
    title: "Cultural Night",
    date: "5 Nov 2025, 7:30 PM",
    venue: "Open Air Theatre",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*ypNl-rschWvD46zTmvZGlQ.jpeg"
  },
  {
    id: 4,
    title: "Career Development Seminar",
    date: "15 Nov 2025, 11:00 AM",
    venue: "Lab 302",
    img: "https://sanjeevdatta.com/wp-content/uploads/2022/03/7-types-of-corporate-training-beneficial-for-career.jpg"
  }
];

function Upcoming_event() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={classes.upcoming_event}>
      <span className={classes.upcoming_event_header}>
        <p className={classes.event}>
          Upcoming Events 
          <p className={classes.coming}>Coming Up Soon</p>
        </p>
      </span>

      <div className={classes.grid}>
        {cartData.map((event, index) => (
          <div
            key={event.id}
            className={classes.card}
            data-aos="fade-up"           
            data-aos-delay={index * 150} 
          >
            <img src={event.img} alt={event.title} className={classes.image} />
            <div className={classes.content}>
              <h3 data-aos="fade-right" data-aos-delay={index * 150 + 50}>
                {event.title}
              </h3>
              <p data-aos="fade-right" data-aos-delay={index * 150 + 100}>
                {event.date}
              </p>
              <span data-aos="fade-right" data-aos-delay={index * 150 + 150}>
                {event.venue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming_event;
