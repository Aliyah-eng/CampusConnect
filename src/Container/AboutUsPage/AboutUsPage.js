import React from 'react'
import Aboutus_main from '../../Component/Aboutus_main/Aboutus_main'
import AboutusHero from '../../Component/AboutusHero/AboutusHero'
import NavBar from '../../Component/NavBar/NavBar'
import Footer from '../../Component/Footer/Footer'
import classes from "./AboutUsPage.module.css"

function AboutUsPage() {
  return (
    <div className={classes.all}>
      <NavBar/>
      <AboutusHero/>
      <Aboutus_main/>
      <Footer/>
        </div>

  )
}

export default AboutUsPage