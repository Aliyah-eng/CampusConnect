import React, { useEffect } from 'react';
import classes from './Header_banner.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header_banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <header 
        className={classes.welcome_header}
        data-aos="fade-down"       
        data-aos-delay="200"      
      >
        <p>Welcome to CampusConnect – Bringing Our Community Together!</p>
      </header>
    </div>
  );
}

export default Header_banner;
