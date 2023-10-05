import TvMovieCard from '../TvMovieCard';
import SectionHeadingWithoutLink from '../SectionHeadingWithoutLink';
import TvMoviesCardShimmer from '../../Shimmers/TvMovieCardShimmer';
import ScrollBarNavigatorLeftButton from '../ScrollBarNavigatorLeftButton';
import ScrollBarNavigatorRightButton from '../ScrollBarNavigatorRightButton';
import useGetUniqueIdForScrollbar from '../../../hooks/useGetUniqueIdForScrollbar';

function DetailsPageTvMovieCards(props) {
    const scrollBarId = useGetUniqueIdForScrollbar();

    return (
        <div>
            <SectionHeadingWithoutLink name={props.heading}></SectionHeadingWithoutLink>
            <div className="flex">
                <ScrollBarNavigatorLeftButton element={document.querySelector(`#${scrollBarId}`)} />
                <div
                    className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5 w-[100%] md:mx-[-5%] mx-[-8%]"
                    id={scrollBarId}
                >
                    {props.data === null ? (
                        <div data-testid="upcomingMovieShimmer">
                            {[...Array(12)].map((_, index) => (
                                <div className="inline-block w-[15%] mr-[1%]" key={index}>
                                    <TvMoviesCardShimmer key={index} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        props.data.map((currentData) => (
                            <div
                                className="inline-block w-[46%] mr-[4%] sm:w-[27%] sm:mr-[2%] md:w-[22%] md:mr[1%] lg:w-[16%] lg:mr-[1%]"
                                key={currentData.id}
                            >
                                <TvMovieCard
                                    name={currentData.hasOwnProperty('name') ? currentData.name : currentData.title}
                                    image={currentData.poster_path}
                                    vote_average={currentData.vote_average}
                                    vote_count={currentData.vote_count}
                                    toLink={`/${props.toLinkPrefix}/${currentData.id}`}
                                    id={currentData.id}
                                />
                            </div>
                        ))
                    )}
                </div>
                <ScrollBarNavigatorRightButton element={document.querySelector(`#${scrollBarId}`)} />
            </div>
        </div>
    );
}

export default DetailsPageTvMovieCards;
