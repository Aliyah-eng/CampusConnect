import React, { useState, useEffect } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";
import classes from "./FeedBack.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TourReview = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);


  const feedbackReviews = [
    {
      imgSrc:
        "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      content:
        "The campus tour was incredibly informative! I loved seeing all the facilities and learning about student life. Very welcoming staff!",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      content:
        "Attended a workshop on career development and it was fantastic. The presenter was engaging, and I gained valuable insights.",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/5905494/pexels-photo-5905494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      content:
        "The online resources are top-notch. I was able to find all the information I needed for my application process quickly and easily.",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      content:
        "I had a question about financial aid and the support team responded swiftly and clearly. Excellent service overall!",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      content:
        "The student lounge is a great place to connect with others and work on group projects. The atmosphere is very positive and collaborative!",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Header */}
      <section className={classes.header} data-aos="fade-down">
        <h1 className={classes.about}>Feedback Reviews</h1>
      </section>

      {/* Review Section */}
      <div className={classes.review_container} data-aos="fade-up">
        <div className={classes.left_section}>
          <h2 className={classes.text_header}>
            Tell us, About your experience?
          </h2>
          <div className={classes.image_card} data-aos="zoom-in">
            <img
              src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Students in a classroom"
            />
          </div>
        </div>
        {Reviewbox()}
      </div>

      {/* Carousel Section with sequential animation */}
      <section className={classes.carousel_wrapper}>
        <div className={classes.image_carousel}>
          {[
            {
              src: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Students collaborating",
            },
            {
              src: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "University library",
            },
            {
              src: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Students in a lecture hall",
            },
            {
              src: "https://images.pexels.com/photos/5905494/pexels-photo-5905494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Student studying on a laptop",
            },
            {
              src: "https://images.pexels.com/photos/5905705/pexels-photo-5905705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Students on campus",
            },
            {
              src: "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Laptop and books",
            },
            {
              src: "https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Students chatting in a hallway",
            },
            {
              src: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              text: "Group project meeting",
            },
          ].map((slide, index) => (
            <div
              className={classes.carousel_slide}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} 
            >
              <img src={slide.src} alt={slide.text} />
              <div className={classes.overlay_text}>{slide.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Form Section */}
      <div className={classes.feedback_container} data-aos="fade-up">
        <div className={classes.feedback_area}>
          <div className={classes.feedback_img_wrapper} data-aos="zoom-in">
            <img
              src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className={classes.feedback_img}
              alt="Students smiling"
            />
          </div>
          {FeedbackForm()}
        </div>
      </div>

      {/* Reviews Summary */}
      <br />
      <div className={classes.head} data-aos="fade-up">
        <center>
          <h2>Feedback Reviews</h2>
        </center>
        <div className={classes.feedback_summary}>
          <h3>Overall Rating: ★★★★☆ (4.5/5)</h3>
          <p>Based on 100 reviews</p>
        </div>
      </div>

      {/* Review Cards */}
      <section className={classes.card_container}>
        {feedbackReviews.map((review, index) => (
          <div className={classes.card} key={index} data-aos="zoom-in">
            <img
              src={review.imgSrc}
              alt={`Review image ${index + 1}`}
              className={classes.card_image}
            />
            <div className={classes.card_content}>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default TourReview;

// Review Box Component
function Reviewbox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [eventAttended, setEventAttended] = useState("");
  const [rating, setRating] = useState(null);
  const [comments, setComments] = useState("");

  const handleRating = (ratingValue) => setRating(ratingValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return alert("Please select a rating.");

    const reviewSummary = `
      Thank you for your feedback, ${name}!
      Email: ${email}
      User Type: ${userType}
      Event Attended: ${eventAttended}
      Rating: ${rating} star${rating > 1 ? "s" : ""}
      Comments: ${comments}
    `;

    window.alert(reviewSummary);
    window.location.reload();
  };

  return (
    <div className={classes.right_section}>
      <h3 className={classes.header_text}>Share Your Experience</h3>

      {/* Rating */}
      <div className={classes.star_rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${classes.star} ${
              rating >= star ? classes.selected : ""
            }`}
            onClick={() => handleRating(star)}
            style={{ color: rating >= star ? "#EF7722" : "gray" }}
          >
            &#9733;
          </span>
        ))}
      </div>

      <form className={classes.form_page} onSubmit={handleSubmit}>
        {/* Name */}
        <div className={classes.form_group}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className={classes.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* User Type */}
        <div className={classes.form_group}>
          <label htmlFor="userType">User Type</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select user type</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Staff">Staff</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>

        {/* Event Attended */}
        <div className={classes.form_group}>
          <label htmlFor="eventAttended">Event Attended</label>
          <input
            type="text"
            id="eventAttended"
            placeholder="Enter event attended (past 1 month)"
            value={eventAttended}
            onChange={(e) => setEventAttended(e.target.value)}
            required
          />
        </div>

        {/* Comments */}
        <div className={`${classes.form_group} ${classes.review_section}`}>
          <div className={classes.review_header}>
            <h3>Your Comments</h3>
          </div>
          <textarea
            rows="4"
            placeholder="Share your experience..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            minLength="20"
            required
          ></textarea>
          <p className={classes.char_count}>
            {comments.length}/20 min characters
          </p>
        </div>

        {/* Submit Button */}
        <div className={classes.btn}>
          <center>
            <button type="submit" className={classes.submit}>
              Submit
            </button>
          </center>
        </div>
      </form>
    </div>
  );
}

// Feedback Form Component
function FeedbackForm() {
  const [suggestions, setSuggestions] = useState("");
  const [complaints, setComplaints] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.trim() && complaints.trim()) {
      alert("Review Accepted");
      setSuggestions("");
      setComplaints("");
    } else {
      alert("Please fill out both suggestions and complaints fields.");
    }
  };

  return (
    <div className={classes.feedback_form_wrapper}>
      <div className={classes.feedback_form}>
        <h3 className={classes.header_text2}>Give Us Feedback</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="suggestions">Your Suggestions:</label>
          <textarea
            id="suggestions"
            rows="4"
            placeholder="Let us know what could be improved..."
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            required
          ></textarea>

          <label htmlFor="complaints">Any Complaints?</label>
          <textarea
            id="complaints"
            rows="4"
            placeholder="Describe any issues you encountered..."
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
            required
          ></textarea>

          <br />
          <button type="submit" className={classes.submit2}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
