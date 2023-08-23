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
        <div className="flex justify-center">
            <div className="w-[10%] flex items-center justify-center">
                <button
                    className="p-4 border border-black rounded-full text-black hover:bg-black hover:text-white duration-200 ease-in-out"
                    onClick={prevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-chevron-compact-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-[80%]">
                <img className="rounded" src={images[currentSlide]} alt="movie images" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
                <button
                    className="p-4 border border-black rounded-full text-black hover:bg-black hover:text-white duration-200 ease-in-out"
                    onClick={nextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-chevron-compact-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
