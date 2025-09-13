import React, { useState, useEffect } from "react";
import classes from "./Sport_event.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaBookmark, FaRegBookmark, FaTimes } from "react-icons/fa";
import { EventCatalogeNavBar } from '../../Container/EventCatalogue/EventCatalogue';
import eventsData from "../../Data/Sport.json";

const Sport_event = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [showBookmarksPanel, setShowBookmarksPanel] = useState(false);
  const [events, setEvents] = useState([]);
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
    setEvents([...events]); // re-render to update bookmark state
  };

  // Filter and sort events
  const normalizedSearch = (searchTerm || "").toLowerCase();
  const filteredData = events
    .filter(event => (event.title || "").toLowerCase().includes(normalizedSearch))
   
    .sort((a, b) => {
      if (sortOption === "year") return a.year.localeCompare(b.year);
      if (sortOption === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <>
      <EventCatalogeNavBar />
      <section className={classes.eventPlanner}>
        {/* Hero */}
        <div className={classes.plannerHero}>
          <h1>Sports Events</h1>
        </div>

        {/* Controls */}
        <div className={classes.controlsWrapper}>
          <h3>Available Events</h3>
          <div className={classes.controls}>
            <input
              type="text"
              className={classes.search}
              placeholder="Search events by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
           
            <select
              className={classes.sortBy}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="year">Year</option>
              <option value="title">Title</option>
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
            <p className={classes.noEvents}>No events match your search.</p>
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
        <img src={event.image} alt={event.title} className={classes.image} />
        <button
          className={`${classes.bookmarkBtn} ${isBookmarked ? classes.active : ""}`}
          onClick={() => onToggleBookmark(event.id)}
        >
          {isBookmarked ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
        </button>
      </div>

      <div className={classes.content}>
        <h2 className={classes.title}>{event.title}</h2>
        <p className={classes.desc}>{event.description}</p>
        <div className={classes.merge}>
          <FaCalendarAlt size={20} />
          <p>{event.year}</p>
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
        <h2>Bookmarked Events</h2>
        <button onClick={onClose} className={classes.closeBtn}>
          <FaTimes size={18} />
        </button>
      </div>

      {bookmarks.length === 0 ? (
        <p className={classes.noBookmarks}>No bookmarked events yet.</p>
      ) : (
        bookmarks.map((event) => (
          <div key={event.id} className={classes.bookmarkCard}>
            <img src={event.image} alt={event.title} />
            <div className={classes.cardInfo}>
              <h3>{event.title}</h3>
              <p>{event.year}</p>
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

export default Sport_event;
