import React, { useEffect } from 'react';
import classes from './Contactus.module.css';
import NavBar from '../../Component/NavBar/NavBar';
import Footer from '../../Component/Footer/Footer';
import ay from '../../Assest/ay.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contactus() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,    // animate every time you scroll
    });
  }, []);

  return (
    <div>
      <NavBar />

      <div className={classes.contact} data-aos="fade-down">
        <h2>Contact Us</h2>
      </div>

      {/* Faculty Coordinators */}
      <div className={classes.coordinators} data-aos="fade-up">
        <h3 className={classes.rcoordinators}>Faculty Coordinators</h3>
        <div className={classes.info}>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Ay Adeleke</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 ADSE</p>
            <p className={classes.number}>📞 +234 915 905 2549</p>
            <p className={classes.email}>📧 adelekeay244@gmail.com</p>
          </div>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Ay Adeleke</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 ADSE</p>
            <p className={classes.number}>📞 +234 915 905 2549</p>
            <p className={classes.email}>📧 adelekeay244@gmail.com</p>
          </div>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Ayomide Alao</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 WEB DEVELOPMENT</p>
            <p className={classes.number}>📞 +234 704 787 3877</p>
            <p className={classes.email}>📧 alaoayomide700@gmail.com</p>
          </div>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Oluwaseun Akinyemi</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 UI/UX DESIGN</p>
            <p className={classes.number}>📞 +234 803 456 7890</p>
            <p className={classes.email}>📧 seunakinyemi123@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Student Coordinators */}
      <div className={classes.coordinators} data-aos="fade-up">
        <h3 className={classes.rcoordinators}>Student Coordinators</h3>
        <div className={classes.info}>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Ay Adeleke</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 ADSE</p>
            <p className={classes.number}>📞 +234 915 905 2549</p>
            <p className={classes.email}>📧 adelekeay244@gmail.com</p>
          </div>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Ayomide Alao</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 WEB DEVELOPMENT</p>
            <p className={classes.number}>📞 +234 704 787 3877</p>
            <p className={classes.email}>📧 alaoayomide700@gmail.com</p>
          </div>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Oluwaseun Akinyemi</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 UI/UX DESIGN</p>
            <p className={classes.number}>📞 +234 803 456 7890</p>
            <p className={classes.email}>📧 seunakinyemi123@gmail.com</p>
          </div>
          <div className={classes.contacts} data-aos="zoom-in">
            <div className={classes.image}>
              <img src={ay} alt="#" />
            </div>
            <h4 className={classes.names}>Oluwaseun Akinyemi</h4>
            <p className={classes.designation}>Team Member</p>
            <p className={classes.department}>📍 UI/UX DESIGN</p>
            <p className={classes.number}>📞 +234 803 456 7890</p>
            <p className={classes.email}>📧 seunakinyemi123@gmail.com</p>
          </div>
        </div>
      </div>
        <div className={classes.text}>
          <h3>Meet Our Team</h3>
        </div>
       <section className={classes.card_container}>
          <div className={classes.card}>
            <img src="" alt="Image 1" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Adio Moyinoluwa</h3>
              <p>I'm Adio Moyinoluwa, a skilled Front-end Developer specializing in website design, UX/UI, and responsive web development solutions.</p>
            </div>
          </div>
           <div className={classes.card}>
            <img src="" alt="Image 1" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Adio Moyinoluwa</h3>
              <p>I'm Adio Moyinoluwa, a skilled Front-end Developer specializing in website design, UX/UI, and responsive web development solutions.</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src=""alt="Image 2" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>David Micah-Daniels</h3>
              <p>My name is David Micah-Daniels, An expert frontend developer highly skilled in HTML5, CSS3, JavaScript ES6 and React and other fronted libraries.</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src="" alt="Image 3" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Aliyah</h3>
              <p>My name is  Adeleke Aliyah and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src="" alt="Image 3" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Stanley</h3>
              <p>I'm Stanley ojukwu , an aspiring full stack developer. I specialize adaptive and responsive web designs and development</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src="" alt="Image 3" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Mustapha</h3>
              <p>My name is Mustapha Akintola, I'm a software developer specializing in website design and responsive websites.</p>
            </div>
          </div>
      
        </section>

      {/* Social Links */}
      <div className={classes.social_links} data-aos="fade-right">
        <h4 className={classes.heading_text}>Follow Us On</h4>
        <i className={classes.fa_brands}></i>
        <i className={classes.fa_brand}></i>
        <i className={classes.fa_brands}></i>
        <i className={classes.fa_brands}></i>
      </div>

      {/* Contact Boxes */}
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

      {/* Location Map */}
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
