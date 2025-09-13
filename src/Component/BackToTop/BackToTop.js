import React from 'react';
import classes from './BackToTop.module.css';
import { FaArrowAltCircleUp } from "react-icons/fa";


const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  
        });
    };

    return (
        <div className={classes.back_to_top_icon} onClick={scrollToTop}>
            <FaArrowAltCircleUp />
        </div>
    );
}

export default BackToTop;
