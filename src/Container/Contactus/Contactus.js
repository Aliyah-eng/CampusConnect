import React, { useEffect } from "react";
import classes from "./Contactus.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import aliyah from "../../Assest/aliyah.jpg"
import Footer from "../../Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const facultyCoordinators = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Dr. Ben Carter",
    designation: "Head of Department",
    department: " Computer Science",
    number: " +234 801 111 2222",
    email: "ben.carter@university.edu",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Dr. Evelyn Reed",
    designation: "Senior Lecturer",
    department: " Electrical Engineering",
    number: " +234 802 333 4444",
    email: "evelyn.reed@university.edu",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Prof. Michael Adebisi",
    designation: "Dean of Studies",
    department: " Artificial Intelligence",
    number: " +234 803 555 6666",
    email: "michael.adebisi@university.edu",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Mrs. Sarah Olayinka",
    designation: "Lecturer I",
    department: " Network & Security",
    number: " +234 804 777 8888",
    email: "sarah.olayinka@university.edu",
  },
];

const studentCoordinators = [
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Chukwudi Eke",
    designation: "Lead Coordinator",
    department: " Computer Science",
    number: " +234 901 123 4567",
    email: "chukwudi.eke@student.com",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ifeoma Nwosu",
    designation: "Event Manager",
    department: " Web Development",
    number: " +234 902 234 5678",
    email: "ifeoma.nwosu@student.com",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Tunde Alabi",
    designation: "Social Media Head",
    department: " UI/UX Design",
    number: " +234 903 345 6789",
    email: "tunde.alabi@student.com",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Grace Adeoye",
    designation: "Public Relations",
    department: " Mobile App Dev",
    number: "+234 904 456 7890",
    email: "grace.adeoye@student.com",
  },
];


const teamMembers = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Adio Moyinoluwa",
    bio: "I'm Adio Moyinoluwa, a skilled Front-end Developer specializing in website design, UX/UI, and responsive web development solutions.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "David Micah-Daniels",
    bio: "My name is David Micah-Daniels, An expert frontend developer highly skilled in HTML5, CSS3, JavaScript ES6 and React and other fronted libraries.",
  },
  {
    image: {aliyah},
    name: "Aliyah",
    bio: "My name is Adeleke Aliyah and i am a React developer, i am very skilled in javascript and javascript libaries.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Stanley",
    bio: "I'm Stanley ojukwu, an aspiring full stack developer. I specialize in adaptive and responsive web designs and development",
  },
  {
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Mustapha",
    bio: "My name is Mustapha Akintola, I'm a software developer specializing in website design and responsive websites.",
  },
    {
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Mustapha",
    bio: "My name is Mustapha Akintola, I'm a software developer specializing in website design and responsive websites.",
  },
];

function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const renderContactCards = (coordinators) => {
    return coordinators.map((person, index) => (
      <div className={classes.contacts} data-aos="zoom-in" key={index}>
        <div className={classes.image}>
          <img src={person.image} alt={person.name} />
        </div>
        <h4 className={classes.names}>{person.name}</h4>
        <p className={classes.designation}>{person.designation}</p>
        <p className={classes.department}> <CiMapPin color="pink" size={24} />
{person.department}</p>
        <p className={classes.number} ><FaPhoneAlt color="pink" size={24} />{person.number}</p>
        <p className={classes.email}>{person.email}</p>
      </div>
    ));
  };

  const renderTeamCards = (members) => {
    return members.map((person, index) => (
      <div className={classes.card} key={index}>
        <img
          src={person.image}
          alt={person.name}
          className={classes.card_image}
        />
        <div className={classes.card_content}>
          <h3>{person.name}</h3>
          <p>{person.bio}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <NavBar />

      <div className={classes.contact} data-aos="fade-down">
        <h2>Contact Us</h2>
      </div>

      <div className={classes.coordinators} data-aos="fade-up">
        <h3 className={classes.rcoordinators}>Faculty Coordinators</h3>
        <div className={classes.info}>
          {renderContactCards(facultyCoordinators)}
        </div>
      </div>

  
      <div className={classes.coordinators} data-aos="fade-up">
        <h3 className={classes.rcoordinators}>Student Coordinators</h3>
        <div className={classes.info}>
          {renderContactCards(studentCoordinators)}
        </div>
      </div>

      <div className={classes.text}>
        <h3>Meet Our Team</h3>
      </div>
      <section className={classes.card_container}>
        {renderTeamCards(teamMembers)}
      </section>

      {/* Social Links */}
      <div className={classes.social_links} data-aos="fade-right">
        <h4 className={classes.heading_text}>Follow Us On</h4>
        <i className={classes.fa_brands}></i>
        <i className={classes.fa_brand}></i>
        <i className={classes.fa_brands}></i>
        <i className={classes.fa_brands}></i>
      </div>

      <div data-aos="fade-left">
        <div className={classes.boxes}>
          <div className={classes.box}>
            <h4>Phone</h4>
            <p>Call Us On</p>
            <p>+2347068037546</p>
            <p>+2347013199799</p>
          </div>
          <div className={classes.box}>
            <h4>Email</h4>
            <p>Mail Us Through</p>
            <p>campusconnect@gmail.com</p>
            <p>mail@connect.com</p>
          </div>
          <div className={classes.box}>
            <h4>Location</h4>
            <p>England</p>
            <p>Nigeria</p>
            <p>London Eye, UK</p>
          </div>
        </div>
      </div>

      <div className={classes.location} data-aos="fade-up">
        <h2 className={classes.heading_text}>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.681615758975!2d3.888322389859625!3d7.39764203461819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6af7758517%3A0x17e6ec5eb71490c3!2sIdea%20Konsult%20Limited%20Adamasingba!5e1!3m2!1sen!2sng!4v1757466506095!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={classes.keyframe}
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Contactus;
