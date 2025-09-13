import React, { useEffect } from "react";
import classes from "./Hero_Event_card.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Card({ image, category, title, description, link }) {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.cardImage} />
      <div className={classes.cardContent}>
        {category && <span className={classes.category}>{category}</span>}
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        {link && (
          <Link to={link}>
            <button className={classes.readMore}>View more</button>
          </Link>
        )}
      </div>
    </div>
  );
}

const Hero_Event_card = () => {
  const cards = [
    {
      image:
        "https://www.montclair.edu/responsive-media/cache/25live/wp-content/uploads/sites/241/2022/03/i-phMnwz2-X2.jpg.5.1x.generic.jpg",
      title: "Departmental Events",
      description: "Explore breathtaking mountain ranges and scenic trails.",
      link: "/department",
    },
    {
      image:
        "https://th-thumbnailer.cdn-si-edu.com/31UEw9PS71nXoc9K1vFHOyUh8Fo=/fit-in/1072x0/filters:focal(3024x2012:3025x2013)/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/485ab438-09df-410f-9105-982ffeb86b12.jpg",
      title: "Cultural Events",
      description: "Discover vibrant city life and urban adventures.",
      link: "/Culture",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/60e078c2ceeb1b9cca9735e5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "Sports Events",
      description: "Relax and enjoy beautiful coastal views and beaches.",
      link: "/sports",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1000/1*WgtEDd5DlWAN9vqtfIhRGw.jpeg",
      title: "Technical Events",
      description: "Engage with innovation, workshops, and tech exhibitions.",
      link: "/tech",
    },
  ];

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section>
      <div className={classes.cards_wrapper}>
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <Card
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero_Event_card;
