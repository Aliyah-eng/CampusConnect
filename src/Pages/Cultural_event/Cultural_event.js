import React, { useState, useEffect } from "react";
import classes from "./Cultural_event.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapPin } from "react-icons/fa";

import { EventCatalogeNavBar } from '../../Container/EventCatalogue/EventCatalogue';

import { FaCalendarDays } from "react-icons/fa6";

import eventsData from "../../Data/Cultural.json";
 
 
const Cultural_event = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [events, setEvents] = useState([]);

 
  useEffect(() => {
    setEvents(eventsData);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleBookmark = (id) => {
    const key = `bookmark-${id}`;
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, true);
    }
    setEvents([...events]); // force re-render
  };

  // ✅ Filtering + sorting
  const normalizedSearch = (searchTerm || "").toLowerCase();

  const filteredData = events
    .filter((event) =>
      (event.eventName || "").toLowerCase().includes(normalizedSearch)
    )
    .filter((event) =>
      category === "All"
        ? true
        : (event.category || "").toLowerCase().trim() === category.toLowerCase().trim()
    )

    .filter((event) =>
      showBookmarked ? localStorage.getItem(`bookmark-${event.id}`) : true
    )
    .sort((a, b) => {
      if (sortOption === "date") {
        return new Date(a.dateTime) - new Date(b.dateTime);
      } else if (sortOption === "name") {
        return a.eventName.localeCompare(b.eventName);
      }
      return 0;
    });

  return (
    <>
    <EventCatalogeNavBar/>
    <section className={classes.eventPlanner}>
      {/* Hero Section */}
      
      <div className={classes.plannerHero}>

        <h1>Cultural & Campus Events</h1>
       
      </div>

      {/* Controls */}
      <div className={classes.controlsWrapper}>
        <h3>{showBookmarked ? " Bookmarked Events" : " Available Events"}</h3>

        <div className={classes.controls}>
          <input
            type="text"
            className={classes.search}
            placeholder="Search events by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className={classes.filterCategory}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Technical">Technical</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Departmental">Departmental</option>
          </select>

          <select
            className={classes.sortBy}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select>

        </div>
      </div>

      {/* Events */}
      <div className={classes.eventsGrid}>
        {filteredData.length === 0 ? (
          <p className={classes.noEvents}>
            {showBookmarked
              ? "No bookmarked events yet."
              : "No events match your search."}
          </p>
        ) : (
          filteredData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onToggleBookmark={toggleBookmark}
            />
          ))
        )}
      </div>
    </section>
    </>
  );
};

// ✅ Event Card Component
function EventCard({ event, onToggleBookmark }) {
  const isBookmarked = localStorage.getItem(`bookmark-${event.id}`);

  return (
    <div className={classes.card} data-aos="fade-up">
      <img src={event.img} alt={event.eventName} className={classes.image} />

      <div className={classes.content}>
        <h2 className={classes.title}>{event.eventName}</h2>
           <p className={classes.desc}>{event.description}</p>
         <div className={ classes.merge}>
            <FaCalendarDays size={24} color="#EF7722"/>
              <p className={classes.date}>{event.dateTime}</p>
        </div>
        <div className={ classes.merge}>
            <FaMapPin size={24} color="#EF7722"/>
             <p className={classes.venue}> {event.venue}</p>
        </div>
        
     

       
      </div>
    </div>
  );
}

export default Cultural_event;
