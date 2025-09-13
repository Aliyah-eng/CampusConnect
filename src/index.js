import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './Container/HomePage/HomePage';
import FeedBack from './Container/FeedBack/FeedBack';
import Contactus from './Container/Contactus/Contactus';
import EventCatalogue from './Container/EventCatalogue/EventCatalogue';
import All_Option from './Pages/All_Option/All_Option';
import AboutUsPage from './Container/AboutUsPage/AboutUsPage';
import Gallery from './Container/Gallery/Gallery';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles
import Cultural_event from './Pages/Cultural_event/Cultural_event';
import Technical_event from './Pages/Technical_event/Technical_event';
import Upcoming_event from './Pages/UpComing_event/UpComing_event';
import RegistrationForm from './Pages/Register/Register';
import Sport_Event from './Pages/Sport_event/Sport_event';
import Department_event from './Pages/Departmental/Departmental';

function AppWrapper() {
  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // animate only once
    });
     AOS.refresh();  
  }, []);
   return (
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
               <Route path="/Aboutus" element={<AboutUsPage/>} />  
            <Route path="/FeedBack" element={<FeedBack/>} />
            <Route path="/contact_us" element={<Contactus/>} />
            <Route path="/Gallery" element={<Gallery/>} />
            <Route path="/Event" element={<EventCatalogue/>} />
            <Route path="/allopton" element={<All_Option/>} />
            <Route path="/cultural" element={<Cultural_event/>} />
            <Route path="/technical" element={<Technical_event/>} />
             <Route path="/Upcoming" element={<Upcoming_event/>} />
             <Route path="/register" element={<RegistrationForm/>} />
             <Route path="/tech" element={<Technical_event/>} />
             <Route path="/culture" element={<Cultural_event/>} />
              <Route path="/sport" element={<Sport_Event/>} />
              <Route path="/department" element={<Department_event/>} />
          </Routes>
        </BrowserRouter>
   );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
      <React.StrictMode>
        <AppWrapper />
      </React.StrictMode>
  );


