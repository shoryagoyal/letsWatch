import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { imagePrefixApi } from '../../constants';

function TvSeriesCast() {
    const { tvSeriesId } = useParams();
    const cast = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/aggregate_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    return (
        <div>
            {cast === null ? (
                <div>The data is loading..</div>
            ) : (
                cast.cast.map((castData) => (
                    <Link to={`/people/${castData.id}`} key={castData.id}>
                        <img
                            src={
                                castData.profile_path === null
                                    ? 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png'
                                    : `${imagePrefixApi}${castData.profile_path}`
                            }
                            style={{
                                width: '40px',
                            }}
                        />
                        <div>{castData.name}</div>
                        <div>Appeared in : {castData.roles[0].episode_count}</div>
                    </Link>
                ))
            )}
        </div>
    );
}
export default TvSeriesCast;
