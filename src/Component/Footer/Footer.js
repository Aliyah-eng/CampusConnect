import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import classes from "./Footer.module.css";



const Footer = () => {
    const form = useRef();
    const [email, setEmail] = useState("");

 const handleSubscribe = (e) => {
    e.preventDefault(); 
    if ( email) {
      alert(`${email} has successfully subscribed to the newsletter!`);
      
    
      setEmail('');
    }
  };

    return (
        <footer className={classes.footer_section}>
            <div className={classes.newsletter_box}>
                <div className={classes.newsletter_content_wrapper}>
                    <h1>Subscribe to our newsletter</h1>
                    <p>Stay updated with the latest beach destinations, travel tips, and exclusive offers delivered straight to your inbox.</p>
                </div>
                <form ref={form}  className={classes.newsletter_input_wrapper}>
                    <input 
                        type="email" 
                        name="user_email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <button type="submit" className={classes.submit_btn}>Submit</button>
                </form>
            </div>
            <div className={classes.footer_content_wrapper}>
                <div className={classes.footer_top_content}>
                    <div className={classes.footer_main}>
                        <div className={classes.logo_text_wrapper}>
                            <div className={classes.logo_wrapper}>
                                <h2>CampusConnect</h2>
                            </div>
                            <p className={classes.img_subtext}>Discover the ultimate beach escape where sun-kissed sands, gentle ocean waves, and unforgettable memories await. Whether you're here to unwind, explore vibrant marine life, or enjoy seaside adventures, our coastal haven offers something for everyone.</p>
                        </div>
                    </div>
                    <div className={classes.lists_wrapper}>
                        <div className={classes.footer_quick_links}>
                            <h1 className={classes.quick_title}>Quick links</h1>
                            <div className={classes.quick_links}>
                                <Link to="/aboutus">About Us</Link>
                                <Link to="/contactus">Contact Us</Link>
                                <Link to="/gallery">Gallery</Link>
                                <Link to="/review">Review</Link>
                                <Link to="/service">Services</Link>
                            </div>
                        </div>
                        <div className={classes.footer_quick_links}>
                            <h1 className={classes.quick_title}>Event</h1>
                            <div className={classes.quick_links}>
                                <Link to="">Cultural</Link>
                                <Link to="/transport">Sports</Link>
                                <Link to="/beaches">Academic</Link>
                                <Link to="/allevent">Department</Link>
                            </div>
                        </div>
                        <div className={classes.footer_quick_links}>
                            <h1 className={classes.quick_title}>Events</h1>
                            <div className={classes.quick_links}>
                                <Link to="/waterevent">Water Sport</Link>
                                <Link to="/firenight">Beach Bonfire Nights</Link>
                                <Link to="/volleyball">volleyball tournament</Link>
                                <Link to="/beachwedding">Wedding Events</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.footer_bottom_content}>
                <p>© All rights reserved | Beauty of Beaches</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
