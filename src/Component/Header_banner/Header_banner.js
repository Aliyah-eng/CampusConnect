import React, { useEffect } from 'react';
import classes from './Header_banner.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header_banner() {
  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <header 
        className={classes.welcome_header}
        data-aos="fade-down"       // animation type
        data-aos-delay="200"       // optional delay
      >
        <p>Welcome to CampusConnect – Bringing Our Community Together!</p>
      </header>
    </div>
  );
}

export default Header_banner;
