import { useState } from 'react';

function RatingModal() {
    const [starRatingHover, setStarRatingHover] = useState(-1);
    const [starRatingClicked, setStarRatingClicked] = useState(-1);

    function changeStarRatingHandler(index) {
        setStarRatingHover(index);
    }
    function changeStarRatingClickHandler(index) {
        setStarRatingClicked(index);
    }

    return (
        <div className="h-screen w-[100%] flex items-center justify-center fixed inset-0">
            <div
                className="w-[40%] z-40"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div>
                    <div>
                        <div className="flex items-center justify-center">
                            <div className="h-24 w-24 z-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[100%] w-[100%] bi bi-star-fill"
                                    fill="blue"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                        </div>
                        <div className="h-24 text-white flex items-center justify-center -mt-24">
                            {starRatingClicked + 1}
                        </div>
                    </div>
                </div>
                <div className="-mt-10 pt-12 w-[100%] bg-slate-700 text-center rounded-md">
                    <div className="text-yellow-600 text-sm font-bold">RATE THIS</div>
                    <div className="text-white font-bold text-xl mb-3">Game of thrones</div>
                    <div className="flex justify-center items-center mb-5">
                        {Array(10)
                            .fill(1)
                            .map((_, index) => (
                                <div
                                    className="text-white w-7 h-7 pr-1"
                                    onMouseEnter={() => changeStarRatingHandler(index)}
                                    onMouseLeave={() => changeStarRatingHandler(-1)}
                                    onClick={() => changeStarRatingClickHandler(index)}
                                    key={index}
                                >
                                    {(starRatingHover == -1 ? starRatingClicked : starRatingHover) < index ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="bi bi-star h-[100%] w-[100%]"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="blue"
                                            className="bi bi-star-fill h-[100%] w-[100%]"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                    </div>
                    <div>
                        <button
                            className={`mb-5 px-12 py-1 rounded font-bold ${
                                starRatingClicked === -1 ? 'text-white bg-slate-400' : 'text-black bg-yellow-400'
                            }`}
                        >
                            Rate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RatingModal;
