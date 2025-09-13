import React, { useState, useEffect } from "react";
import classes from "./EventCatalogue.module.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiTheaterCurtains, GiTrophy } from "react-icons/gi";
import { FiClipboard } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


import { GoStarFill } from "react-icons/go";



export const EventCatalogeNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_content_wrapper}>
        <h2>
          <Link to="/" className={classes.navbar_link}>
            CampusConnect
          </Link>
        </h2>
       
        <div
          className={`${classes.navLinks} ${menuOpen ? classes.active : ""}`}
        >
          <Link to="/Event" className={classes.navbar_link}>
            <FaHome  size={ 40}/>
          </Link>
        </div>
      </div>
    </div>
  );
};


/* ---------------- SAMPLE DATA ---------------- */
const data =
[
  {
    "id": 1,
    "name": "TechFest 2025",
    "date": "2025-07-20T10:00:00",
    "venue": "Main Auditorium",
    "category": "Technical",
    "department": "Computer Science",
    "description": "A showcase of innovative projects and coding challenges.",
    "image": "https://www.ceoevent.com.tr/content/images/islerimiz/etkinlik/Teknofest%20RT%202019/Buyuk/Teknofest%2094.jpg"
  },
  {
    "id": 2,
    "name": "Hackathon 2025",
    "date": "2025-10-22T09:00:00",
    "venue": "Lab 101",
    "category": "Technical",
    "department": "Information Technology",
    "description": "Students compete in 24-hour coding challenges.",
    "image": "https://kubnews.ru/upload/resize_cache/iblock/47f/1200_800_2/v3gtw5a5570jh6jec84yxoo5gelm7iyb.jpg"
  },
  {
    "id": 3,
    "name": "Robotics Championship",
    "date": "2025-07-25T11:00:00",
    "venue": "Robotics Lab",
    "category": "Technical",
    "department": "Mechanical Engineering",
    "description": "Battle of robots designed by engineering students.",
    "image": "https://avatars.mds.yandex.net/i?id=96ba5d1229dc1eceb392e793df7e62c9702c5f73-5866283-images-thumbs&n=13"
  },
  {
    "id": 4,
    "name": "Cultural Week",
    "date": "2025-08-05T18:00:00",
    "venue": "Open Grounds",
    "category": "Cultural",
    "department": "Arts",
    "description": " celebration of music, dance, and drama by students.",
    "image": "https://live-production.wcms.abc-cdn.net.au/e8ca22e392edeb726fe81a3e2d2d38a5?impolicy=wcms_crop_resize&cropH=1206&cropW=1812&xPos=148&yPos=125&width=862&height=575"
  },
  {
    "id": 5,
    "name": "Annual Music Night",
    "date": "2025-08-10T19:00:00",
    "venue": "Auditorium B",
    "category": "Cultural",
    "department": "Music Department",
    "description": "Students showcase their musical talents where the winner recives Award.",
    "image": "https://storage.yandexcloud.net/umn/images/optimized/ab25fdf9d0424f0eb2cc96d16c191c44_large.jpg"
  },
  {
    "id": 6,
    "name": "Drama Festival",
    "date": "2025-08-12T17:00:00",
    "venue": "Auditorium A",
    "category": "Cultural",
    "department": "Theater Arts",
    "description": "Inter-departmental drama competition where you see many talent up the.",
    "image": "https://s.yimg.com/ny/api/res/1.2/ZTa6bT8Qi_b3XK1rjARbEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/ap.org/37bfd0119e2bf13b14dacfc757c40417"
  },
  {
    "id": 7,
    "name": "Inter-College Football",
    "date": "2025-09-01T15:00:00",
    "venue": "Sports Complex",
    "category": "Sports",
    "department": "Physical Education",
    "description": "Football championship among colleges.",
    "image": "https://s.yimg.com/ny/api/res/1.2/.NxrJMMxJ8X6_lfRY_PpPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/ap.org/e62d180f6139f4d8e46985641aec4e64"
  },
  {
    "id": 8,
    "name": "Basketball Tournament",
    "date": "2025-09-03T14:00:00",
    "venue": "Indoor Court",
    "category": "Sports",
    "department": "Physical Education",
    "description": "Competitive basketball tournament.",
    "image": "https://s.yimg.com/ny/api/res/1.2/OIP8XhpSeo1M9H2N9rXmfQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNA--/https://media.zenfs.com/en/aol_raleigh_news_and_observer_mcclatchy_356/7a3dfa5a86ae1b26dfd832c84213eacd"
  },
  {
    "id": 9,
    "name": "Marathon 2025",
    "date": "2025-09-05T06:00:00",
    "venue": "City Streets",
    "category": "Sports",
    "department": "Physical Education",
    "description": "Annual city marathon for students and staff.",
    "image": "https://t3.ftcdn.net/jpg/06/69/81/00/360_F_669810021_wu6IWcSWNx3kVr63VRoSDbM1SC2e32ed.jpg"
  },
  {
    "id": 10,
    "name": "Science Symposium",
    "date": "2025-10-01T09:00:00",
    "venue": "Conference Hall",
    "category": "Departmental",
    "department": "Science Faculty",
    "description": "Presentations on research and innovation.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Panel_speakers_at_the_2018_Trottier_Public_Science_Symposium.jpg"
  },
  {
    "id": 11,
    "name": "Business Seminar",
    "date": "2025-10-03T10:00:00",
    "venue": "Lecture Hall 2",
    "category": "Departmental",
    "department": "Business Studies",
    "description": "Seminar on entrepreneurship and management.",
    "image": "https://cdn.sanity.io/images/0vv8moc6/pharmacytimes/a371671184944364b0c67b31c0d6313210002cd7-5000x2633.jpg?fit=crop&auto=format"
  },
  {
"id": 12,
    "name": "Engineering Expo",
    "date": "2025-10-20T10:00:00",
    "venue": "Exhibition Grounds",
    "category": "Departmental",
    "department": "Engineering",
    "description": "Showcase of student engineering projects.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/df/North_American_Model_Engineering_Expo_4-19-2008_191_N_%282498666262%29.jpg"
  },
  {
    "id": 13,
    "name": "AI Workshop",
    "date": "2025-07-28T13:00:00",
    "venue": "Tech Lab 1",
    "category": "Technical",
    "department": "Computer Science",
    "description": "Workshop on Artificial Intelligence and Machine Learning.",
    "image": "https://images.hothardware.com/contentimages/newsitem/66616/content/small_hero-computer-workshop-ai-generated.jpg"
  },
  {
    "id": 14,
    "name": "Dance Competition",
    "date": "2025-08-15T18:00:00",
    "venue": "Auditorium C",
    "category": "Cultural",
    "department": "Dance Club",
    "description": "Solo and group dance performances.",
    "image": "https://competes.tv/wp-content/uploads/2023/07/dance-competition-first-dance-competition-dance-competition-experience-Dance-8c71894e-1024x683.jpg"
  },
  {
    "id": 15,
    "name": "Cricket Championship",
    "date": "2025-09-10T09:00:00",
    "venue": "Main Grounds",
    "category": "Sports",
    "department": "Physical Education",
    "description": "College-level cricket tournament.",
    "image": "https://risingnepaldaily.com/storage/media/40764/APF-wins.jpg"
  },
  {
    "id": 16,
    "name": "Literary Fest",
    "date": "2025-08-18T10:00:00",
    "venue": "Library Hall",
    "category": "Cultural",
    "department": "English Department",
    "description": "Poetry, storytelling, and creative writing competitions.",
    "image": "https://www.mypenang.gov.my/uploads/event/359/cover/GTLF-03.jpg"
  },
    {
    "id": 30,
    "name": "AR/VR Showcase",
    "date": "2025-08-02T11:00:00",
    "venue": "Innovation Lab",
    "category": "Technical",
    "department": "Computer Science",
    "description": "Showcase of augmented and virtual reality projects.",
    "image": "https://i.playground.ru/p/1jDHh5W9EnYBki1XKO54GA.jpeg"
  },

  {
    "id": 18,
    "name": "Startup Pitch Day",
    "date": "2025-10-15T11:00:00",
    "venue": "Innovation Hub",
    "category": "Technical",
    "department": "Entrepreneurship Cell",
    "description": "Students pitch startup ideas to investors.",
    "image": "https://media.voog.com/0000/0040/9864/photos/sTARTUp_Pitching.jpg"
  },
  {
    "id": 19,
    "name": "Photography Contest",
    "date": "2025-08-22T10:00:00",
    "venue": "Exhibition Hall",
    "category": "Cultural",
    "department": "Photography Club",
    "description": "Exhibition of creative student photography.",
    "image": "https://media.voog.com/0000/0040/9864/photos/sTARTUp_Pitching.jpg"
  },
  {
    "id": 20,
    "name": "Folk Dance Night",
    "date": "2025-08-25T18:00:00",
    "venue": "Open Air Theater",
    "category": "Cultural",
    "department": "Dance Department",
    "description": "Traditional folk dances performed by students.",
    "image": "https://i.pinimg.com/474x/c4/9a/53/c49a5398178d1fe584c2a5f650fbfe3f.jpg?nii=t"
  },
  {
    "id": 21,
    "name": "Chess Tournament",
    "date": "2025-09-12T09:00:00",
    "venue": "Recreation Hall",
    "category": "Sports",
    "department": "Chess Club",
    "description": "Inter-departmental chess championship.",
    "image": "https://www.idman.biz/media/2025/09/08/480x320/shahmat_080925_2.jpg?v=1757336864"
  },
  {
    "id": 22,
    "name": "Swimming Gala",
    "date": "2025-09-14T07:00:00",
    "venue": "Aquatic Center",
    "category": "Sports",
    "department": "Physical Education",
    "description": "Swimming competitions across various categories.",
    "image": "https://newvision-media.s3.amazonaws.com/cms/e58a691f-1125-40c0-91bb-99df9e333a37.jpg"
  },
  {
    "id": 23,
    "name": "Volleyball Cup",
    "date": "2025-09-20T16:00:00",
    "venue": "Indoor Court",
    "category": "Sports",
    "department": "Physical Education",
    "description": "College-level volleyball tournament.",
    "image": "https://www.euroleague.com/wp-content/uploads/2023/06/CZE-vs-UKR.jpeg"
  },
  {
    "id": 17,
    "name": "Cybersecurity Awareness",
    "date": "2025-10-12T09:00:00",
    "venue": "Tech Auditorium",
    "category": "Technical",
    "department": "Information Security",
    "description": "Talks and workshops on ethical hacking and cyber defense.",
    "image": "https://imageio.forbes.com/specials-images/imageserve/379100755/0x0.jpg?format=jpg&width=1200"
  }



  
]


/* ---------------- SIDEBAR ---------------- */
const CatalogueSidebar = () => {
  return (
    <aside className={classes.catalogue_sidebar}>
      <ul className={classes.catalogue_sidebar_list}>
        <h3>Event Activities</h3>
        <li className={classes.active_list}>Check Out Your Event</li>
        <Link to="/Gallery" className={classes.link}>
          <li>Gallery</li>
        </Link>
        <Link to="/Upcoming" className={classes.link}>
          <li>Upcoming Event</li>
        </Link>
        <Link to="/FeedBack" className={classes.link}>
          <li>FeedBack</li>
        </Link>

        <h3 className={classes.tour_options}>Events</h3>
        <Link to="/allopton" className={classes.link}>
          <li>All Options</li>
        </Link>
        <Link to="/technical" className={classes.link}>
          <li>Technical Event</li>
        </Link>
        <Link to="/sport" className={classes.link}>
          <li>Sport Event</li>
        </Link>
        <Link to="/department" className={classes.link}>
          <li>Departmental Event</li>
        </Link>
        <Link to="/cultural" className={classes.link}>
          <li>Cultural Event</li>
        </Link>
      </ul>
    </aside>
  );
};

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date(date).getTime();

    const update = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft("Done!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setTimeLeft(`${days}d ${hours}h`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return <p className={classes.countdown}>{timeLeft}</p>;
};

const getCategoryIcon = (category) => {
  if (category === "Technical") {
    return <FaLaptopCode size={20} color="#EF7722" />;
  } else if (category === "Cultural") {
    return <GiTheaterCurtains size={20} color="#EF7722" />;
  } else if (category === "Sports") {
    return <GiTrophy size={20} color="#EF7722" />;
  } else if (category === "Departmental") {
    return <MdMenuBook size={20} color="#EF7722" />;
  } else {
    return null; 
  }
};

function DestinationCard({ event, onToggleBookmark }) {
  const [isBookmarked, setIsBookmarked] = useState(
    !!localStorage.getItem(`bookmark-${event.id}`)
  );

  const handleBookmark = () => {
    onToggleBookmark(event.id);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={classes.destination_card}>
      <div className={classes.destination_card_img_wrapper}>
        <img
          src={event.image}
          alt={event.name}
          className={classes.destination_img}
        />
        <p className={classes.event_details}>
          <Countdown date={event.date} />
        </p>
      </div>
      <div className={classes.destination_card_content}>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <div className={classes.info}>
          <p>
            <strong><FaCalendarDays color="#EF7722" />:</strong>{" "}
            {new Date(event.date).toLocaleString()}
          </p>
          <p>
            <strong><FaHouse color="#EF7722" />:</strong> {event.venue}
          </p>
          <div className={classes.categoryBadge}>
            {getCategoryIcon(event.category)} {event.category}
          </div>
          <p>
            <strong><FiClipboard  color="#EF7722"/>:</strong> {event.department}
          </p>
        </div>
       <div className={classes.card_footer}>
  <button
    className={`${classes.bookmark} ${isBookmarked ? classes.saved : ""}`}
    onClick={handleBookmark}
  >
    {isBookmarked ? (
      <>
        < GoStarFill style={{ marginRight: "6px" }} /> Bookmarked
      </>
    ) : (
      <>
        < CiStar style={{ marginRight: "6px" }} /> Bookmark
      </>
    )}
  </button>
</div>
      </div>
    </div>
  );
}
const TourPlanner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [showBookmarked, setShowBookmarked] = useState(false); // starts false

  const [events, setEvents] = useState(data);

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
      (event.name || "").toLowerCase().includes(normalizedSearch)
    )
    .filter((event) =>
      category === "All" ? true : event.category === category
    )
    .filter((event) =>
      showBookmarked ? localStorage.getItem(`bookmark-${event.id}`) : true
    )
    .sort((a, b) => {
      if (sortOption === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }
      
      return 0;
    });

  return (
    <section className={classes.event_planner}>
      <div className={classes.planner_hero}>
        <h2>Check Out Your Event</h2>
       
      </div>

      <div className={classes.event_card_container}>
        <div className={classes.budget_input_wrapper}>
           <h3>{showBookmarked ? "Bookmarked Events" : "Available Events"}</h3>
          <div className={classes.budget_box}>
            
            <section className={classes.controls}>
               
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
                <button
                  className={classes.fixedCartButton}
                  onClick={() => setShowBookmarked(!showBookmarked)}
                >
                  <FaShoppingCart
                    size={30}
                    color={showBookmarked ? "white" : "white"}
                  />
                </button>

            </section>
          </div>
        </div>

      

        <div className={classes.event_card_wrapper}>
          {filteredData.length === 0 ? (
            showBookmarked ? (
              <p>No bookmarked events yet.</p>
            ) : (
              <p>Event not found.</p>
            )
          ) : (
            filteredData.map((event) => (
              <DestinationCard
                key={event.id}
                event={event}
                onToggleBookmark={toggleBookmark}
              />
            ))
          )}
</div>

      </div>
    </section>
  );
};





/* ---------------- MAIN PAGE ---------------- */
const EventCatalogue = () => {
  return (
    <section className={classes.event_catalogue_page}>
      <EventCatalogeNavBar />
      <section className={classes.event_catalogue_dashboard}>
        <CatalogueSidebar />
        <TourPlanner />
      </section>
    </section>
  );
};

export default EventCatalogue;
