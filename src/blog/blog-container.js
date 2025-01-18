import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from "react-responsive-carousel";

import BlogItems from "./blog-items";
import "../style/carousel.css";

// Import images
import photo1 from "../images/about/photo1.JPG";
import photo2 from "../images/about/photo2.jpg";
import photo3 from "../images/about/photo3.JPG";

// Array for photos
const photos = [
    { src: photo1, alt: "Photo 1", legend: "" },
    { src: photo2, alt: "Photo 2", legend: "" },
    { src: photo3, alt: "Photo 3", legend: "" },
];

export default class BlogContainer extends Component {
    render() {
        const customArrowStyles = { background: "transparent", border: "none" };

        return (
            <Carousel
                className="carousel"
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="custom-prev-button"
                            style={customArrowStyles}
                        >
                            ❮
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="custom-next-button"
                            style={customArrowStyles}
                        >
                            ❯
                        </button>
                    )
                }
            >
                {photos.map((photo, index) => (
                    <div key={index}>
                        <img src={photo.src} alt={photo.alt} />
                        <p className="carousel-image-wrapper">{photo.legend}</p>
                    </div>
                ))}
            </Carousel>
        );
    }
}