import React from "react";
import "../style/layouts.css";

import photo1 from "../images/about/photo1.JPG";
import photo2 from "../images/about/photo2.jpg";
import photo3 from "../images/about/photo3.JPG";

const photos = [
    {src: photo1, alt: "Photo 1"},
    {src: photo2, alt: "Photo 2"},
    {src: photo3, alt: "Photo 3"},
];

export default function() {
    return (
        <div className="me">
            <div className="gallery-container">
                {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{ backgroundImage: `url(${photo.src})` }}
                        >
                        </div>
                    ))}
                </div>
        
            <div className="about-me">
                <h1 className="meet-me">Meet Me: How I Fell in Love with Traveling</h1>
                <p>Hi, I’m Alexis! If you’re new here or just curious, let me share how my journey into traveling began and shaped my life.
                My love for exploring the world really started when I moved to Hawaii for college. I studied biology and spent five amazing years living in paradise. Being surrounded by the ocean and vibrant cultures opened my eyes to the beauty of diversity—both in nature and people.
                After college, my travels truly took off. My first time out of the country was volunteering for a month in Utila, Honduras, where I immersed myself in local life and marine conservation work. I returned to Hawaii and worked as a safety diver on a shark boat in Hawaii, an adventure that taught me courage, respect for these magnificent creatures, and how to thrive in challenging environments.
                After leaving the shark boat, I spent two unforgettable months traveling through nine countries in Europe. It was a whirlwind of history, culture, and incredible food, from wandering ancient streets to soaking in breathtaking landscapes. That trip gave me a deep appreciation for the richness of the world and the joy of stepping out of my comfort zone.
                I wanted to gain more experience for studying so I completed an internship in Cyprus for three months. After I traveled to a tiny island off Sumatra, Indonesia, I completed and earned my divemaster certification. That was another life-changing experience that deepened my love for the ocean . I even squeezed in a trip to Taiwan to visit a friend—proof that some of the best adventures are spontaneous!
                Next, I spent three weeks in the Philippines, exploring its stunning islands, turquoise waters, and warm, welcoming communities. From there, I visited Vietnam, a country brimming with vibrant culture, delicious food, and breathtaking scenery. These experiences deepened my love for Southeast Asia and its incredible diversity.
                Traveling has been about so much more than just seeing new places. It’s about meeting amazing people, learning new perspectives, and growing in ways I never imagined.
                Now, I’m excited to combine my passions to craft the next chapter of my journey.
                What about you? How did your love for travel begin? Let’s swap stories</p>

                </div>
        </div>
    );
};