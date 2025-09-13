import React, { useState, useEffect } from "react";
import classes from "./Technical_event.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { EventCatalogeNavBar } from "../../Container/EventCatalogue/EventCatalogue";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";



import eventsData from "../../Data/Technical.json";

const Technical_event = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData.technical || eventsData);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleBookmark = (id) => {
    const key = `bookmark-${id}`;
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, true);
    }
    setEvents([...events]);
  };

  const normalizedSearch = (searchTerm || "").toLowerCase();

  const filteredData = events
    .filter((event) =>
      (event.title || "").toLowerCase().includes(normalizedSearch)
    )
    .filter((event) =>
      category === "All"
        ? true
        : (event.category || "").toLowerCase().trim() ===
          category.toLowerCase().trim()
    )
    .filter((event) =>
      showBookmarked ? localStorage.getItem(`bookmark-${event.id}`) : true
    )
    .sort((a, b) => {
      if (sortOption === "year") {
        return a.year.localeCompare(b.year);
      } else if (sortOption === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <>
      <EventCatalogeNavBar />

      <section className={classes.eventPlanner}>
        <div className={classes.plannerHero}>
          <h1>Technical & Campus Events</h1>
        </div>


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
              <option value="year">Year</option>
              <option value="name">Name</option>
            </select>

            <button
              className={classes.bookmarkToggle}
              onClick={() => setShowBookmarked(!showBookmarked)}
            >
              {showBookmarked ? "Show All Events" : "Show Bookmarked"}
            </button>
          </div>
        </div>

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


function EventCard({ event, onToggleBookmark }) {
  const isBookmarked = localStorage.getItem(`bookmark-${event.id}`);

  return (
    <div className={classes.card} data-aos="fade-up">
      <img src={event.image} alt={event.title} className={classes.image} />

      <div className={classes.content}>
        <h2 className={classes.title}>{event.title}</h2>
        <div className={ classes.merge}>
            <FaCalendarDays size={24} color="#EF7722"/>
              <p className={classes.year}> {event.year}</p>
        </div>
        <div className={ classes.merge}>
            <FaLaptopCode size={24} color="#EF7722"/>
             <p className={classes.category}> {event.category}</p>
        </div>

        <p className={classes.description}>{event.description}</p>
        <button
          className={classes.bookmarkBtn}
          onClick={() => onToggleBookmark(event.id)}
        >
          {isBookmarked ? " Bookmarked" : "☆ Bookmark"}
        </button>
      </div>
    </div>
  );
}

export default Technical_event;
