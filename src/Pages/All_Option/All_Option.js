import React from 'react'
import classes from './All_Option.module.css'
import { EventCatalogeNavBar } from '../../Container/EventCatalogue/EventCatalogue';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';

function Card({ image, category, title, description,link }) {
  return (
    <div className={classes.container}>
   
    <div className={classes.card}>
       
      <img src={image} alt={title} className={classes.cardImage} />
      <div className={classes.cardContent}>
        <span className={classes.category}>{category}</span>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
         <Link to={link}>
        <button className={classes.readMore}>View more</button>
        </Link>
      </div>
      
    </div>
    
    </div>
  );
}
const All_Option=()=> {
    
  const cards = [
    {
      image: "https://www.montclair.edu/responsive-media/cache/25live/wp-content/uploads/sites/241/2022/03/i-phMnwz2-X2.jpg.5.1x.generic.jpg",
      title: "Departmental Events",
      description: "Explore breathtaking mountain ranges and scenic trails Join workshops, conferences, and seminars designed to broaden your academic journey.",
      link: "/academic-events"
    },
    {
      image: "https://th-thumbnailer.cdn-si-edu.com/31UEw9PS71nXoc9K1vFHOyUh8Fo=/fit-in/1072x0/filters:focal(3024x2012:3025x2013)/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/485ab438-09df-410f-9105-982ffeb86b12.jpg",
      title: "Cultural Events",
      description: "Discover vibrant city life and urban adventures. From music festivals to art exhibitions, mmerse yourself in creativity and traditions from around the world.",
      link: "/Culture"

    },
    {
      image: "https://imageio.forbes.com/specials-images/imageserve/60e078c2ceeb1b9cca9735e5/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds",
      title: "Sports Events",
      description: "Relax and enjoy beautiful coastal views and beaches. while taking part in exciting sports activities.Experience thrilling competitions, tram spirit.",
      link: "/academic-events"
    },
     {
      image: "https://b2b.onetwotrip.com/blog/wp-content/uploads/2024/08/shutterstock_2321303215.jpg",
      title: "technical Events",
      description: "Networks with peers, join departmental meetings, and take part in group projects. These events encourage collaboration and strengthen bond within deppartments",
      link: "/tech"
    }
  ];

  return (
    <>
    <EventCatalogeNavBar/>
    <section>
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          category={card.category}
          title={card.title}
          description={card.description}
         link={card.link}
        />
      ))}
    </div>
     
    </section>

    </>
    
  );
  
}


export default All_Option;