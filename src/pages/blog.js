import React from "react";
import CreatePost from "../blog/create-post";
import photo1 from "../static/images/blog/camoles.jpg";
import photo2 from "../static/images/blog/indianajones.jpg";
import photo3 from "../static/images/blog/reaching.jpg";
import photo4 from "../static/images/blog/sunset.jpg";
import photo5 from "../static/images/blog/red.jpg";
import photo6 from "../static/images/blog/moterbike.JPG";
import photo7 from "../static/images/blog/france.jpg";
import photo8 from "../static/images/blog/belgium.jpg";
import photo9 from "../static/images/blog/italy.jpg";
import photo11 from "../static/images/blog/IMG_5810.PNG";
import photo12 from "../static/images/blog/austria.jpg";
import photo13 from "../static/images/blog/budapest.PNG";

import photoFly from "../static/images/blog/fly.jpg";
import photoSleep from "../static/images/blog/sleep.jpg";

import "../style/blog.css";

const profiles = [
  { img: photo11,
    alt: "Photo 11",
    text: "Honduras", },
  { img: photo7,
    alt: "Photo 7",
    text: "France", },
  { img: photo9,
    alt: "Photo 9",
    text: "Italy", },
  { img: photo8,
    alt: "Photo 8",
    text: "Belgium", },
  { img: photo12,
    alt: "Photo 12",
    text: "Austria", },
  { img: photo1,
    alt: "Photo 1",
    text: "Jordan", },
  { img: photo13,
    alt: "Photo 13",
    text: "Budapest", },
  { img: photo2,
    alt: "Photo 2",
    text: "Cyprus", },
  { img: photo3,
    alt: "Photo 3",
    text: "Indonesia", },
  { img: photo5,
    alt: "Photo 5",
    text: "Taiwan", },
  { img: photo4,
    alt: "Photo 4",
    text: "Philippines", },
  { img: photo6,
    alt: "Photo 6",
    text: "Vietnam", },
];

export default function Blog({ loggedInStatus }) {
  return (
    <div className="blog-container">
      <h2 className="title-travels">My Travels</h2>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-item">
            <div className="profile-img"
            style={{ backgroundImage: `url(${profile.img})` }}
          ></div>
            <div className="profile-text">
              <p>{profile.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="resources">
        <h1 className="travel">Resources</h1>
        <section className="resources-section">
          <div className="resource-category">
            <div className="resource-text">
              <h2>Resources to fly:</h2>
              <ul className="resource-list">
                <li>
                  <a href="https://www.skyscanner.com/" target="_blank" rel="noopener noreferrer">
                    Skyscanner
                  </a>
                </li>
                <li>
                  <a href="https://skiplagged.com/" target="_blank" rel="noopener noreferrer">
                    Skiplagged
                  </a>
                </li>
                <li>
                  <a href="https://www.travelocity.com/" target="_blank" rel="noopener noreferrer">
                    Travelocity
                  </a>
                </li>
                <li>
                  <a href="https://us.trip.com/?locale=en-us" target="_blank" rel="noopener noreferrer">
                    Trip
                  </a>
                </li>
              </ul>
            </div>
            <div className="resource-image">
              <img src={photoFly} alt="Flying Resources" />
            </div>
          </div>

          <div className="resource-category">
            <div className="resource-text">
              <h2>Resources to sleep:</h2>
              <ul className="resource-list">
                <li>
                  <a href="https://www.hostelworld.com/" target="_blank" rel="noopener noreferrer">
                    Hostelworld
                  </a>
                </li>
                <li>
                  <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer">
                    Airbnb
                  </a>
                </li>
              </ul>
            </div>
            <div className="resource-image">
              <img src={photoSleep} alt="Sleeping Resources" />
            </div>
          </div>
        </section>
      </div>

      {loggedInStatus === "LOGGED_IN" && <CreatePost />}
    </div>
  );
}
