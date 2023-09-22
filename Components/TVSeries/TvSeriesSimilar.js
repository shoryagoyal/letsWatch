import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithoutLink from '../Helpers/SectionHeadingWithoutLink';
import '../../Styles.css';

function TvSeriesSimilar() {
    const { tvSeriesId } = useParams();
    const similarSeriesData = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/similar?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    console.log(similarSeriesData);
    return (
        <div>
            <SectionHeadingWithoutLink name="More like this"></SectionHeadingWithoutLink>
            <div className="flex overflow-x-scroll no-scrollbar">
                {similarSeriesData === null ? (
                    <div>Data is loading</div>
                ) : (
                    similarSeriesData.results.map((similarSeries) => (
                        <TvMovieCard
                            name={similarSeries.name}
                            image={similarSeries.poster_path}
                            vote_average={similarSeries.vote_average}
                            vote_count={similarSeries.vote_count}
                            toLink={`/tv/${similarSeries.id}`}
                            id={similarSeries.id}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TvSeriesSimilar;
