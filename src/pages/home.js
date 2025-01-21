import React from "react";
import { Link } from "react-router";

import "../style/home.css";

import CarouselContainer from "../carousel/carousel-container";

export default function() {
    return (
        <div className="home-page">
            <div className="blog-link">
                <Link to="/blog">Start Exploring</Link>
            </div>
            <div className="carousel-container">
                <CarouselContainer />
            </div>
        </div>
    )
}
