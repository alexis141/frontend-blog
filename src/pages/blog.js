import React from 'react';
import { Link } from "react-router-dom";
import CreatePost from "../blog/create-post";
import '../style/blog.css';

const Blog = ({ loggedInStatus }) => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>My Travel and Resource Blog</h1>
      </header>

      <section className="resources-section">
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
      </section>

      <section className="travel-section">
        <h2>Where I've Traveled</h2>
        <ul className="travel-list">
          <li>Hawaii, USA</li>
          <li>Utila, Honduras</li>
          <li>Sumatra, Indonesia</li>
          <li>Cyprus</li>
          <li>Europe (9 countries)</li>
          <li>Taiwan</li>
        </ul>
      </section>

      {/* Conditionally render CreatePost */}
      {loggedInStatus === "LOGGED_IN" && <CreatePost />}
    </div>
  );
};

export default Blog;
