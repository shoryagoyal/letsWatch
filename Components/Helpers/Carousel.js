import React, { useState } from 'react';

function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };
    console.log(currentSlide);
    return (
        <div className="flex">
            <div className="w-[10%] flex justify-center">
                <button onClick={prevSlide}>Prev</button>
            </div>
            <div className="w-[80%]">
                <img src={images[currentSlide]} alt="movie images" />
            </div>
            <div className="w-[10%] flex justify-center">
                <button className="" onClick={nextSlide}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Carousel;
