import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithoutLink from '../Helpers/SectionHeadingWithoutLink';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';

function TvSeriesSimilar() {
    const { tvSeriesId } = useParams();
    const similarSeriesData = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/similar?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );

    return (
        <div>
            <SectionHeadingWithoutLink name="More like this"></SectionHeadingWithoutLink>
            <div className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5">
                {similarSeriesData === null ? (
                    <div data-testid="upcomingMovieShimmer">
                        {[...Array(12)].map((_, index) => (
                            <div className="inline-block w-[15%] mr-[1%]" key={index}>
                                <TvMoviesCardShimmer key={index} />
                            </div>
                        ))}
                    </div>
                ) : (
                    similarSeriesData.results.map((similarSeries) => (
                        <div className="inline-block w-[15%] mr-[1%]" key={similarSeries.id}>
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
        </div>
    );
}

export default TvSeriesSimilar;
