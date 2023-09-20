import useFetch from '../../hooks/useFetch';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';
import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';

function UpcomingMovies() {
    const upcomingMovieData = useFetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );

    if (upcomingMovieData === null) {
        return (
            <div>
                <SectionHeadingWithLink name="Upcoming movies" link="#" />

                <div className="flex flex-wrap justify-center" data-testid="upcomingMovieShimmer">
                    {[...Array(12)].map((_, index) => (
                        <TvMoviesCardShimmer key={index} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div>
            <SectionHeadingWithLink name="Upcoming movies" link="#" />
            <div className="flex flex-wrap justify-center" data-testid="upcomingMovies">
                {upcomingMovieData.results.map((movie) => (
                    <TvMovieCard
                        image={movie.poster_path}
                        id={movie.id}
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                        name={movie.title}
                        key={movie.id}
                        toLink={`/movie/${movie.id}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default UpcomingMovies;
