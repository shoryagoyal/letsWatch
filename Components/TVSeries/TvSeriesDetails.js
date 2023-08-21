import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';

function TvSeriesDetails() {
    const { tvSeriesId } = useParams();
    const details = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    const posterUrl = useToGetImageSrc(details === null ? null : details.poster_path);
    return (
        <div>
            {details === null ? (
                <div>Data is coming</div>
            ) : (
                <div>
                    <span>
                        <img src={posterUrl} style={{ width: '100px' }} />
                    </span>
                    <span>
                        <div>
                            <span>Name: </span>
                            <span>{details && details.name}</span>
                        </div>
                        <div>
                            <span>Genres: </span>
                            <span>
                                {details != null &&
                                    details.genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
                            </span>
                        </div>
                        <div>
                            <span>Number of seasons: </span>
                            <span>{details && details.number_of_seasons}</span>
                        </div>
                        <div>
                            <span>Number of episodes: </span>
                            <span>{details && details.number_of_episodes}</span>
                        </div>
                    </span>
                </div>
            )}
        </div>
    );
}
export default TvSeriesDetails;
