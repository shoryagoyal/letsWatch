import { useState } from 'react';

import TvMovieSingleReview from './TvMovieSingleReview';
import SectionHeadingWithoutLink from '../SectionHeadingWithoutLink';

function TvMovieReviewsContainer(props) {
    const [reviewNumber, setReviewNumber] = useState(0);

    if (props.reviews === null || props.reviews.length === 0) return <div>Data will be loaded</div>;
    return (
        <div>
            <SectionHeadingWithoutLink name="User reviews" />
            <div className="flex">
                <div className="w-[10%] flex justify-center items-center">
                    <div
                        className="h-16 w-16 bg-slate-800 rounded-full text-white p-4 flex justify-center items-center hover:cursor-pointer"
                        onClick={() => {
                            setReviewNumber((reviewNumber - 1 + props.reviews.length) % props.reviews.length);
                        }}
                    >
                        <div className="w-5 h-5 border-l-4 border-t-4 -rotate-45 ml-2"></div>
                    </div>
                </div>
                <div className="w-[75%] mx-[2%]">
                    <TvMovieSingleReview
                        profilePictureUrl={props.reviews[reviewNumber].author_details.avatar_path}
                        username={props.reviews[reviewNumber].author_details.username}
                        content={props.reviews[reviewNumber].content}
                    />
                </div>
                <div className="w-[10%] flex justify-center items-center">
                    <div
                        className="h-16 w-16 p-4 bg-slate-800 rounded-full text-white flex justify-center items-center hover:cursor-pointer"
                        onClick={() => {
                            setReviewNumber((reviewNumber + 1) % props.reviews.length);
                        }}
                    >
                        <div className="w-5 h-5 border-r-4 border-t-4  mr-2 rotate-45"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                {[...Array(props.reviews.length)].map((_, index) => (
                    <div
                        className={`h-3 w-3 rounded-full mx-1 hover:cursor-pointer ${
                            index == reviewNumber ? 'bg-white' : 'bg-slate-600'
                        }`}
                        onClick={() => {
                            setReviewNumber(index);
                        }}
                        key={index}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default TvMovieReviewsContainer;
