import React from 'react'
import classes from './Aboutus_main.module.css'
import { Link } from 'react-router-dom'

function Aboutus_main() {
  const events = [
    {
      title: "Inter-college Sports Meet",
      month: "January",
      category: "Sports & Activities",
      description:
        "A week-long sports event with football, basketball, athletics, and indoor games competitions.",
      icon: "🏆",
      image: "https://matangitonga.to/sites/default/files/styles/mto_home_slide_large_watermark/public/slides/20240405_athletics_TVJ5203_2000x1128px.jpg?itok=8-A9gs4l" // sports
    },
    {
      title: "TechFest",
      month: "February",
      category: "Technical",
      description:
        "A 3-day annual technology festival featuring project exhibitions, coding challenges, and startup showcases.",
      icon: "💻",
      image: "https://avatars.mds.yandex.net/i?id=c8f87e76c040b4af8b9858eb3753a6ea7bc4c05c-8410613-images-thumbs&n=13" // tech
    },
    {
      title: "Music Nights",
      month: "March",
      category: "Cultural",
      description:
        "An evening filled with live performances, band shows, and solo acts by student musicians.",
      icon: "🎭",
      image: "https://i.ytimg.com/vi/-rewq2e0suw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgNSh_MA8=&amp;rs=AOn4CLCzyNIlJ6izaK5n2S1KgVS8b-vaLw" // music
    },
    {
      title: "Hackathon",
      month: "April",
      category: "Technical",
      description:
        "A 24-hour coding marathon where students collaborate to solve real-world problems using technology.",
      icon: "💻",
      image: "https://matchy.ru/_next/image?url=https%3A%2F%2Fcms.matchy.ru%2Fuploads%2F2017_10_SOSUEU_17_207_4e3bad8040.jpg&w=1920&q=100" // hackathon
    },
    {
      title: "Dance Competition",
      month: "July",
      category: "Cultural",
      description:
        "Inter-college dance competition featuring solo, duet, and group performances across genres.",
      icon: "🎭",
      image: "https://cdn.culture.ru/images/7f6eaa51-be5f-58ae-ac2c-3eb39b76077b" // dance
    },
    {
      title: "Robotics Championship",
      month: "September",
      category: "Technical",
      description:
        "Inter-department competition where teams build and showcase robots for tasks and challenges.",
      icon: "🤖",
      image: "https://i.dvapis.ru/info/p/photos/218/218771/f1043e000b3456311828fe9c94adac4609be1e9db.jpg" // robotics
    },
    {
      title: "Alumni Meet",
      month: "October",
      category: "Activities",
      description:
        "An annual gathering for past graduates to reconnect, share experiences, and guide current students.",
      icon: "👥",
      image: "https://www.diak.fi/wp-content/uploads/2021/05/cropped-DSC6214_3201.jpg" // alumni
    },
    {
      title: "Annual Day",
      month: "December",
      category: "Cultural",
      description:
        "A celebration of college achievements, performances, and awards with participation from all departments.",
      icon: "🎉",
      image: "https://i.ytimg.com/vi/QuaUtGIkixw/hqdefault.jpg" // celebration
    },
  ];

  return (
    <div>
      {/* --- About Section --- */}
      <section className={classes.about_history}>
        <div className={classes.history_container}>
          <div className={classes.about_detail}>
            <div className={classes.logo_wrapper}>
              <Link to="/" className={classes.logo_link}>
                CampusConnect
              </Link>
            </div>
            <p>
            CampusConnect has been dedicated to showcasing the vibrant spirit o
            f campus life since 2025. We aim to bring you engaging events, inspiring activities,
             and opportunities for connection across departments and student communities.
            </p>
            <p>
              From exciting cultural festivals to groundbreaking technical workshops and
               competitive sports tournaments, our platform explores the diverse experiences and 
               traditions that make campus life unforgettable. Whether you're seeking to participate,
                organize, or simply stay informed, CampusConnect provides insights, schedules, and event highlights 
                to keep you connected and involved.
            </p>
          </div>

          <div className={classes.history_img_wrapper}>
            <img
              src="https://www.sjsu.edu/_images/people/ADV_campus-events-dschmitz_1.jpg"
              alt="History"
            />
          </div>
        </div>
      </section>

      {/* --- Mission Section --- */}
      <section className={classes.section_body}>
        <section className={classes.section_one}>
          <p className={classes.mission_header}>OUR MISSION</p>
          <div className={classes.mission_content}>
            <div className={classes.text_p}>
                <p>
                We firmly believe that by connecting students, faculty, 
                and visitors to campus events through a centralized platform,
                we create an inclusive, transparent, and engaging environment that inspires participation and collaboration.
                </p>
            </div>
            <div className={classes.quote}>
                Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our
                people need it sorely on these accounts. Broad, wholesome, charitable views of men and things
                cannot be acquired by vegetating in one little corner of the earth all one’s lifetime.
                <p>Mark Twain, 1869</p>
            </div>
          </div>
        </section>

        <section className={classes.section_two}>
        <h2 className={classes.values_header}>OUR CORE VALUES</h2>
         <div className={classes.card}>
        
          <ul className={classes.valuesList}>
            <li>Accessibility – Easy access to event information across devices.</li>
            <li>Transparency – Accurate, up-to-date event details.</li>
            <li>Collaboration – Encourage teamwork between departments & clubs.</li>
            <li>Engagement – Promote active student & faculty participation.</li>
            <li>Inclusivity – Welcome diverse audiences.</li>
            <li>Innovation – Deliver modern, user-friendly experiences.</li>
            <li>Community Building – Strengthen student-faculty-public bonds.</li>
          </ul>
        </div>
        </section>
      </section>
      <h1 className={classes.Patner_tittle}>Our Partners</h1>
      <div className={classes.partner_logos}>
        <a href="https://valenciacollege.edu/" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixdYsXV0hSMhdBQ_JULv9PXs-9oZR3CUhPw&s"
            alt="Valencia College"
          />
        </a>
        <a href="https://www.ufl.edu/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/University_of_Florida_Vertical_Signature.svg/800px-University_of_Florida_Vertical_Signature.svg.png"
            alt="University of Florida"
          />
        </a>
        <a href="https://www.angelo.edu/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Angelo_State_University_seal.svg/1200px-Angelo_State_University_seal.svg.png"
            alt="Angelo State University"
          />
        </a>
            <a href="https://www.durham.ac.uk//" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqGH877a16NCSfzoG4jMNMkcwmcjcSAT9-g&s"
            alt="Durham University"
          />
        </a>
        <a href="https://college.harvard.edu/" target="_blank">
          <img
            src="https://www.shorttermprograms.com/images/cache/600_by_314/uploads/institution-logos/harvard-university.png"
            alt="harvard college"
          />
        </a>
     
        <a href="https://www.stagecoachbus.com" target="_blank">
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2022/01/stagecoach-group-vector-logo-2022.png"
            alt="Stagecoach"
          />
        </a>
            <a href="https://www.flixbus.com" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBN3LpE27ysOkBOYGvkjoLUloyax4o0-oSQ&s"
            alt="FlixBus"
          />
        </a>
        <a href="https://www.stagecoachbus.com" target="_blank">
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2022/01/stagecoach-group-vector-logo-2022.png"
            alt="Stagecoach"
          />
        </a>
      </div>
      {/* --- Events Section --- */}
      <section className={classes.events_section}>
        <h2 className={classes.event_title}>Annual College Events</h2>
        <div className={classes.events_grid}>
          {events.map((event, index) => (
            <div key={index} className={classes.event_card}>
              <img
                src={event.image}
                alt={event.title}
                className={classes.event_image}
              />
              <div className={classes.event_header}>
                <span className={classes.event_icon}>{event.icon}</span>
                <h3>{event.title}</h3>
              </div>
              <p className={classes.event_month}>{event.month}</p>
              <p className={classes.event_category}>{event.category}</p>
              <p className={classes.event_description}>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
       <h1 className={classes.tittle}> USEFUL ARTICLES</h1><br/>
{/* 
        <section  className={classes.image_topic}>
          <div className={classes.topic_div}>
            <div className={classes.topic_img_wrapper}>
                <img src='https://lp-cms-production.imgix.net/2024-01/DSC0187.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image} />

            </div>
            <div className={classes.topic_text}>
                 <h3>Ask a local expert about Armenia...</h3>
                 <Link to='https://www.lonelyplanet.com/articles/local-expert-elsewhere-armenia' target='_blank'>Read article</Link>
            </div>
          </div>          <div className={classes.topic_div}>
            <div className={classes.topic_img_wrapper}>
               <img src='https://lp-cms-production.imgix.net/2024-01/Stocksytxpf22f9d26raT300Medium4517362.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image}/></div>
               <div className={classes.topic_text}>
               <h3>The 10 best ways to get under the skin of Los Angeles...</h3>
               <Link to='https://www.lonelyplanet.com/articles/top-things-to-do-in-los-angeles' target='_blank'>Read article</Link>
               </div>
             </div>
             <div className={classes.topic_div}>
              <div className={classes.topic_img_wrapper}>
               <img src='https://lp-cms-production.imgix.net/2022-08/Washington-USA-Seattle-StephanieB-shutterstock_editorial_1901529775-rfe.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image}/></div>
              <div className={classes.topic_text}>
              <h3>10 free things to do in Washington state...</h3>
              <Link to='https://www.lonelyplanet.com/articles/top-free-things-to-do-in-washington-state' target='_blank'>Read article</Link>
               </div>
             </div>
             <div className={classes.topic_div}>
              <div className={classes.topic_img_wrapper}>
               <img src='https://lp-cms-production.imgix.net/2023-01/GettyImages-1209020145.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image}/></div>
               <div className={classes.topic_text}>
               <h3>24 free things to do in Lisbon...</h3>
               <Link to='https://www.lonelyplanet.com/articles/top-free-things-to-do-in-lisbon' target='_blank'>Read article</Link>
               </div>
             </div>
        </section> */}

    </div>
  )
}

export default Aboutus_main
