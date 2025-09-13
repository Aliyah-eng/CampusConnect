import React, { useState, useEffect } from "react";
import classes from "./Cultural_event.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaMapPin, FaBookmark, FaRegBookmark, FaTimes } from "react-icons/fa";
import { EventCatalogeNavBar } from '../../Container/EventCatalogue/EventCatalogue';
import eventsData from "../../Data/Cultural.json";

const Cultural_event = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [events, setEvents] = useState([]);
  const [showBookmarksPanel, setShowBookmarksPanel] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  // Initialize events and AOS
  useEffect(() => {
    setEvents(eventsData);
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Update bookmarks whenever events change
  useEffect(() => {
    const storedBookmarks = events.filter(event =>
      localStorage.getItem(`bookmark-${event.id}`)
    );
    setBookmarks(storedBookmarks);
  }, [events]);

  // Toggle bookmark
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
    .filter(event => (event.eventName || "").toLowerCase().includes(normalizedSearch))

    .filter(event => showBookmarked ? localStorage.getItem(`bookmark-${event.id}`) : true)
    .sort((a, b) => {
      if (sortOption === "date") return new Date(a.dateTime) - new Date(b.dateTime);
      if (sortOption === "name") return a.eventName.localeCompare(b.eventName);
      return 0;
    });

  return (
    <>
      <EventCatalogeNavBar />
      <section className={classes.eventPlanner}>
        {/* Hero */}
        <div className={classes.plannerHero}>
          <h1>Cultural & Campus Events</h1>
        </div>

        {/* Controls */}
        <div className={classes.controlsWrapper}>
          <h3>{showBookmarked ? "Bookmarked Events" : "Available Events"}</h3>
          <div className={classes.controls}>
            <input
              type="text"
              className={classes.search}
              placeholder="Search events by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
           
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

        {/* Show Bookmarks Button */}
        <button
          className={classes.showBookmarksBtn}
          onClick={() => setShowBookmarksPanel(true)}
        >
          View Bookmarks ({bookmarks.length})
        </button>

        {/* Bookmark Panel */}
        {showBookmarksPanel && (
          <BookmarkPanel
            bookmarks={bookmarks}
            onClose={() => setShowBookmarksPanel(false)}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {/* Events Grid */}
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

// Event Card
function EventCard({ event, onToggleBookmark }) {
  const isBookmarked = localStorage.getItem(`bookmark-${event.id}`);

  return (
    <div className={classes.card} data-aos="fade-up">
      <div className={classes.imageWrapper}>
        <img src={event.img} alt={event.eventName} className={classes.image} />
        <button
          className={`${classes.bookmarkBtn} ${isBookmarked ? classes.active : ""}`}
          onClick={() => onToggleBookmark(event.id)}
        >
          {isBookmarked ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
        </button>
      </div>

      <div className={classes.content}>
        <h2 className={classes.title}>{event.eventName}</h2>
        <p className={classes.desc}>{event.description}</p>
        <div className={classes.merge}>
          <FaCalendarAlt size={20} />
          <p className={classes.date}>{event.dateTime}</p>
        </div>
        <div className={classes.merge}>
          <FaMapPin size={20} />
          <p className={classes.venue}>{event.venue}</p>
        </div>
      </div>
    </div>
  );
}

// Bookmark Panel
function BookmarkPanel({ bookmarks, onClose, onToggleBookmark }) {
  return (
    <div className={classes.bookmarkPanel}>
      <div className={classes.panelHeader}>
         <button onClick={onClose} className={classes.closeBtn}>
          <FaTimes size={18} />
        </button>
        <h2>Bookmarked Events</h2>
       
      </div>

      {bookmarks.length === 0 ? (
        <p className={classes.noBookmarks}>No bookmarked events yet.</p>
      ) : (
        bookmarks.map((event) => (
          <div key={event.id} className={classes.bookmarkCard}>
            <img src={event.img} alt={event.eventName} />
            <div className={classes.cardInfo}>
              <h3>{event.eventName}</h3>
              <p>{event.dateTime}</p>
              <button
                className={classes.removeBtn}
                onClick={() => onToggleBookmark(event.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cultural_event;
