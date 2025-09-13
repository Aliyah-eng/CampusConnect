import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Hero_sectio.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero_section() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
    AOS.refresh();
  }, []);

  return (
    <section className={classes.hero}>
      <div className={classes.hero_content_wrapper}>
        {/* Text content */}
        <div className={classes.hero_txt_content}>
          <h2 data-aos="fade-right" data-aos-delay="100">
            Welcome to CampusConnect!
          </h2>
          <p data-aos="fade-right" data-aos-delay="200">
            At CampusConnect, staying updated and engaged on campus has
            never been easier. Discover upcoming events, join clubs and workshops, 
            register for seminars, and connect with fellow students and staff.
          </p>
          <p data-aos="fade-right" data-aos-delay="300">
            Make the most of your campus life—all in one place!
          </p>
          <Link to="/Event">
            <button 
              className={classes.explore_btn} 
              data-aos="zoom-in" 
              data-aos-delay="400"
            >
              Explore
            </button>
          </Link>
        </div>

        <div 
          className={classes.hero_img_wrapper} 
          data-aos="fade-left" 
          data-aos-delay="500"
        >
          <img 
            src="https://i.pinimg.com/1200x/ca/a8/f9/caa8f984d0fc9f5853aed8d49d2266b2.jpg" 
            className={classes.hero_img} 
            alt="CampusConnect Hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero_section;
