import React, { useState, useEffect } from "react";
import galleryData from "../../Data/Gallery.json";
import NavBar from "../../Component/NavBar/NavBar";
import classes from "./Gallery.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [year, setYear] = useState("All");
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    setGallery(galleryData.gallery);
    setFilteredGallery(galleryData.gallery);
  }, []);

  useEffect(() => {
    const filtered = gallery.filter((item) => {
      const matchesYear = year === "All" || item.year === year;
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesYear && matchesCategory && matchesSearch;
    });
    setFilteredGallery(filtered);
  }, [year, category, searchTerm, gallery]);

  return (
    <>
      <NavBar />

      <section className={classes.hero} data-aos="fade-down">
        <h1 className={classes.title}>GALLERY</h1>
        <p>Discover exciting images from past events.</p>
      </section>

      <section className={classes.controls} data-aos="fade-up">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={classes.searchBar}
        />
        <div className={classes.spacer} >
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="All">All Years</option>
          <option value="2022-23">2022-23</option>
          <option value="2023-24">2023-24</option>
          <option value="2024-25">2024-25</option>
          <option value="2025-26">2025-26</option>
          <option value="2026-27">2026-27</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Technical">Technical</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
          <option value="Departmental">Departmental</option>
        </select>
        </div>
      </section>

      <section className={classes.gallery}>
        <div className={classes.galleryGrid}>
          {filteredGallery.length === 0 ? (
            <p>Event not found.</p>
          ) : (
            filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className={classes.card}
                onClick={() => setSelectedCard(item)}
                // data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <img
                  className={classes.pics}
                  src={item.image}
                  alt={item.title}
                />
                <span className={classes.categoryBadge}>{item.category}</span>
                <div className={classes.cardInfo}>
                  {item.title} | {item.year}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Overlay */}
      {selectedCard && (
        <div
          className={classes.overlay}
          onClick={() => setSelectedCard(null)}
        >
          <div
            className={classes.overlayContent}
            onClick={(e) => e.stopPropagation()}
            data-aos="fade-in"
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className={classes.overlayImage}
            />
            <h2>{selectedCard.title}</h2>
            <p>
              <strong>Year:</strong> {selectedCard.year}
            </p>
            <p>
              <strong>Category:</strong> {selectedCard.category}
            </p>
            <p>{selectedCard.description}</p>
            <button
              onClick={() => setSelectedCard(null)}
              className={classes.closeBtn}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
