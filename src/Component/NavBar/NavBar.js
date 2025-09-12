import React, { useState } from 'react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";


const MobileNav = ({ closeMobileNav }) => {
  return (
    <div className={classes.header}>
      <div className={classes.mobile_nav}>
        <header className={classes.nav_header}>
          <Link to="/" className={classes.mobile_navbar_logo} onClick={closeMobileNav}>
            CampusConnect
          </Link>
        </header>

        <ul className={classes.navbar_list}>
          <li><Link to="/Aboutus" className={classes.mobile_navbar_link} onClick={closeMobileNav}>About Us</Link></li>
          <li><Link to="/Event" className={classes.mobile_navbar_link} onClick={closeMobileNav}>Event Catalogue</Link></li>
          <li><Link to="/contact_us" className={classes.mobile_navbar_link} onClick={closeMobileNav}>Contact Us</Link></li>
          <li><Link to="/Gallery" className={classes.mobile_navbar_link} onClick={closeMobileNav}>Gallery</Link></li>
          <li><Link to="/FeedBack" className={classes.mobile_navbar_link} onClick={closeMobileNav}>Feedback</Link></li>
        </ul>

        <Link to="/register">
          <button className={classes.register}>Register</button>
        </Link>

        <div className={classes.mobile_nav_closer} onClick={closeMobileNav}>
          <MdCancelPresentation />
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => setIsMobileNavVisible(!isMobileNavVisible);
  const closeMobileNav = () => setIsMobileNavVisible(false);

  return (
    <>
      {/* Mobile Navbar Overlay */}
      {isMobileNavVisible && <MobileNav closeMobileNav={closeMobileNav} />}

      {/* Desktop Navbar */}
      <nav className={classes.navbar}>
        <div className={classes.nav}>
          <Link to="/" className={classes.Logo}>CampusConnect</Link>

          <div className={classes.link_register}>
            <ul className={classes.nav_links}>
              <Link to="/Aboutus" className={classes.link}><li>About us</li></Link>
              <Link to="/Event" className={classes.link}><li>Event Catalogue</li></Link>
              <Link to="/contact_us" className={classes.link}><li>Contact Us</li></Link>
              <Link to="/Gallery" className={classes.link}><li>Gallery</li></Link>
              <Link to="/FeedBack" className={classes.link}><li>Feedback</li></Link>
            </ul>
            <Link to="/register"><button className={classes.register}>Register</button></Link>
          </div>

          <button className={classes.mobile_nav_toogler} onClick={toggleMobileNav}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
