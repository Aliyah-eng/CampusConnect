import React, { useEffect } from 'react';
import classes from './Main_hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main_hero() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: false,     // animate every time element scrolls into view
    });
    AOS.refresh();
  }, []);

  return (
    <section className={classes.hero}>
      <div className={classes.landing_page}>
        <div className={classes.hero_text}>
          <h1 data-aos="fade-down" data-aos-delay="100">
            Explore, Connect, Participate <br/> 
            Your Gateway to Everything Happening on Campus!
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Stay Updated, Get Involved – Discover the Latest Events, Activities, and Campus Highlights!
          </p>
          {/* <button className={classes.btn_learn} data-aos="zoom-in" data-aos-delay="500">Explore Gear</button> */}
        </div>
      </div>
    </section>
  );
}

export default Main_hero;
