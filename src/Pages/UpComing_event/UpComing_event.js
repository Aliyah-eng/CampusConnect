import React, { useState, useEffect } from "react";
import classes from "./UpComing_event.module.css";
import { FaCalendarDays,FaLocationDot, FaMap,FaCalendar,FaBookmark,} from "react-icons/fa6";
import { EventCatalogeNavBar } from "../../Container/EventCatalogue/EventCatalogue";
import eventsData from "../../Data/Upcoming.json";

const Upcoming_event = () => {
  const [events, setEvents] = useState([]);
  const [bookmarks, setBookmarks] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  useEffect(() => {
    setEvents(eventsData);

    const saved = JSON.parse(localStorage.getItem("bookmarks")) || {};
    setBookmarks(saved);
  }, []);

  const toggleBookmark = (id) => {
    const updated = {
      ...bookmarks,
      [id]: !bookmarks[id],
    };

    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <>
      <EventCatalogeNavBar />
      <div>
        <div className={classes.upcoming_hero}>
          <p className={classes.first_text}>Upcoming</p>
          <h1>Table Mountain Cableway</h1>
          <div className={classes.mis}>
            <div className={classes.this}>
              <FaCalendarDays />
              <p>May,10,2026</p>
            </div>
            <div className={classes.this}>
              <FaLocationDot />
              <p>Mumbai</p>
            </div>
            <div className={classes.this}>
              <FaMap />
              <p>Table Montain</p>
            </div>
          </div>
        
        </div>

        <div className={classes.events}>
          <p className={classes.event_tit}>
            Upcoming <span className={classes.event_spa}>Events</span>
          </p>
          <div className={classes.divider}>
            <FaCalendar />
          </div>
        </div>

        <div className={classes.cards_butts}>
          {["All", "Technical", "Cultural", "Sports", "Departmental"].map(
            (cart) => (
              <button
                key={cart}
                type="button"
                className={
                  selectedCategory === cart ? classes.active_btn : ""
                }
                onClick={() => setSelectedCategory(cart)}
              >
                {cart}
              </button>
            )
          )}
        </div>

        <div className={classes.card}>
          {filteredEvents.map((event) => (
            <div className={classes.cards} key={event.id}>
              <div className={classes.cards_cont}>
                <img src={event.image} alt={event.title} />
                <button
                  type="button"
                  className={classes.bookmark_btn}
                  onClick={() => toggleBookmark(event.id)}
                >
                  <FaBookmark
                    color={bookmarks[event.id] ? "orange" : "gray"}
                    size={20}
                  />
                </button>

                <button className={classes.category_btn} type="button">
                  {event.category}
                </button>
              </div>
              <h3 className={classes.card_tit}>{event.title}</h3>
              <div className={classes.card_cont}>
                <div className={classes.thi}>
                  <div className={classes.gir}>
                    <FaCalendar />
                    <p className={classes.thi_t}>{event.date}</p>
                  </div>
                  <div className={classes.gir}>
                    <FaLocationDot />
                    <p className={classes.thi_t}>{event.location}</p>
                  </div>
                </div>
              </div>
              <p className={classes.card_text}>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upcoming_event;
