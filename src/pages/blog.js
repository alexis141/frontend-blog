import React from 'react';
import { Link } from "react-router";

import CreatePost from "../blog/create-post";
import '../style/blog.css';


const BlogPage = () => {
  return (
    // <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
    <div className="blog-container">
      <header className="blog-header">
        <h1>My Travel and Resource Blog</h1>
      </header>

      <section className="resources-section">
        <h2>Resources to fly:</h2>
        <ul className="resource-list">
            <li><Link to="https://www.skyscanner.com/">Skyscanner</Link></li>
            <li><Link to="https://skiplagged.com/">Skiplagged</Link></li>
            <li><Link to="https://www.travelocity.com/">Travelocity</Link></li>
            <li><Link to="https://us.trip.com/?locale=en-us">Trip</Link></li>
        </ul>

        <h2>Resources to sleep:</h2>
        <ul className="resource-list">
            <li><Link to="https://www.hostelworld.com/">Hostelworld</Link></li>
            <li><Link to="https://www.airbnb.com/">Airbnb</Link></li>
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

    
      <CreatePost />
    </div>
  );
};

export default BlogPage;


