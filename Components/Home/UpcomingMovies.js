import useFetch from '../../hooks/useFetch';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';
import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';

function UpcomingMovies() {
    const upcomingMovieData = useFetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );

    return (
        <div className="py-3">
            <SectionHeadingWithLink name="Upcoming movies" link="#" />
            <div className="flex">
                <div className="text-white w-[4%] flex justify-center items-center">
                    <button
                        className="px-[39%] py-[50%] rounded z-10 bg-slate-600"
                        onClick={() => {
                            const scrollbar = document.querySelector('#scrollbar');
                            scrollbar.scrollLeft -= 400;
                        }}
                    >
                        &lt;
                    </button>
                </div>
                <div className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5 w-[100%] mx-[-4%]" id="scrollbar">
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
                <div className="text-white w-[4%] flex justify-center items-center">
                    <button
                        className="px-[39%] py-[50%] rounded z-10 bg-slate-600"
                        onClick={() => {
                            const scrollbar = document.querySelector('#scrollbar');
                            scrollbar.scrollLeft += 400;
                        }}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpcomingMovies;
