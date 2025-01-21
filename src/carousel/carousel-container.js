import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from "../images/about/photo1.JPG";
import photo2 from "../images/about/photo2.jpg";
import photo3 from "../images/about/photo3.JPG";

const ImageSource = [
    { src: photo1, alt: "Photo 1", legend: "" },
    { src: photo2, alt: "Photo 2", legend: "" },
    { src: photo3, alt: "Photo 3", legend: "" },
];


const CarouselContainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="my-carousel">
            <Slider {...settings}>
                {ImageSource.map((img, index) => (
                    <div key={index}>
                        <img src={img.src} alt={img.alt} />
                        {img.legend && <p>{img.legend}</p>}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselContainer;
