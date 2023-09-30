import { useState } from 'react';

import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithoutLink from '../Helpers/SectionHeadingWithoutLink';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';
import ScrollBarNavigatorLeftButton from '../Helpers/ScrollBarNavigatorLeftButton';
import ScrollBarNavigatorRightButton from '../Helpers/ScrollBarNavigatorRightButton';
import useGetUniqueIdForScrollbar from '../../hooks/useGetUniqueIdForScrollbar';

function TvSeriesSimilar(props) {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const scrollBarId = useGetUniqueIdForScrollbar();

    return (
        <div>
            <SectionHeadingWithoutLink name="More like this"></SectionHeadingWithoutLink>
            <div className="flex">
                <ScrollBarNavigatorLeftButton
                    scrollPercentageVal={scrollPercentage}
                    element={document.querySelector(`#${scrollBarId}`)}
                />
                <div
                    className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5 w-[100%] mx-[-4%]"
                    id={scrollBarId}
                    onScroll={() => {
                        const ele = document.querySelector(`#${scrollBarId}`);
                        setScrollPercentage((ele.scrollLeft / (ele.scrollWidth - ele.clientWidth)) * 100);
                    }}
                >
                    {props.tvSeriesSimilarSeries === null ? (
                        <div data-testid="upcomingMovieShimmer">
                            {[...Array(12)].map((_, index) => (
                                <div className="inline-block w-[15%] mr-[1%]" key={index}>
                                    <TvMoviesCardShimmer key={index} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        props.tvSeriesSimilarSeries.results.map((similarSeries) => (
                            <div
                                className="inline-block w-[46%] mr-[4%] sm:w-[27%] sm:mr-[2%] md:w-[22%] md:mr[1%] lg:w-[16%] lg:mr-[1%]"
                                key={similarSeries.id}
                            >
                                <TvMovieCard
                                    name={similarSeries.name}
                                    image={similarSeries.poster_path}
                                    vote_average={similarSeries.vote_average}
                                    vote_count={similarSeries.vote_count}
                                    toLink={`/tv/${similarSeries.id}`}
                                    id={similarSeries.id}
                                />
                            </div>
                        ))
                    )}
                </div>
                <ScrollBarNavigatorRightButton
                    scrollPercentageVal={scrollPercentage}
                    element={document.querySelector(`#${scrollBarId}`)}
                />
            </div>
        </div>
    );
}

export default TvSeriesSimilar;
