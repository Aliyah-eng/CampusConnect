import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import Hero_section from '../../Component/Hero_section/Hero_section'
import Upcoming_event from '../../Component/Upcoming_event/Upcoming_event'
import Count_down from '../../Component/Count_down/Count_down'
import Main_hero from '../../Component/Main_hero/Main_hero'
import Header_banner from '../../Component/Header_banner/Header_banner'
import Hero_Event_card from '../../Component/Hero_Event_card/Hero_Event_card'
import Footer from '../../Component/Footer/Footer'
import classes from './HomePage.module.css'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'



function HomePage() {
  return (
    <div>
      {/* <Header_banner/> */}
      <NavBar/>
      <Hero_section/>
      <Main_hero/>
       <Upcoming_event/>
      <Count_down targetDate="2025-12-31T23:59:59" />
      <Hero_Event_card/>
      {/* <NewsLetter/> */}
      <Footer/>
     
      
    </div>
  )
}

export default HomePage
