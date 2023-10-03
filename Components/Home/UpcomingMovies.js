import useFetch from '../../hooks/useFetch';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';
import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';
import ScrollBarNavigatorLeftButton from '../Helpers/ScrollBarNavigatorLeftButton';
import ScrollBarNavigatorRightButton from '../Helpers/ScrollBarNavigatorRightButton';
import useGetUniqueIdForScrollbar from '../../hooks/useGetUniqueIdForScrollbar';

function UpcomingMovies() {
    const upcomingMovieData = useFetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    const scrollBarId = useGetUniqueIdForScrollbar();

    return (
        <div className="py-3">
            <SectionHeadingWithLink name="Upcoming movies" link="#" />
            <div className="flex">
                <ScrollBarNavigatorLeftButton element={document.querySelector(`#${scrollBarId}`)} />
                <div
                    className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5 w-[100%] md:mx-[-5%] mx-[-8%]"
                    id={scrollBarId}
                >
                    {upcomingMovieData === null ? (
                        <div data-testid="upcomingMovieShimmer">
                            {[...Array(12)].map((_, index) => (
                                <div className="inline-block w-[15%] mr-[1%]" key={index}>
                                    <TvMoviesCardShimmer key={index} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div data-testid="upcomingMovies">
                            {upcomingMovieData.results.map((movie) => (
                                <div className="inline-block w-[15%] mr-[1%]" key={movie.id}>
                                    <TvMovieCard
                                        image={movie.poster_path}
                                        id={movie.id}
                                        vote_average={movie.vote_average}
                                        vote_count={movie.vote_count}
                                        name={movie.title}
                                        key={movie.id}
                                        toLink={`/movie/${movie.id}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <ScrollBarNavigatorRightButton element={document.querySelector(`#${scrollBarId}`)} />
            </div>
        </div>
    );
}

export default UpcomingMovies;
