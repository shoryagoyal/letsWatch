import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { imagePrefixApi } from '../constants';
import { Link } from 'react-router-dom';

function TvSeriesSimilar() {
    const { tvSeriesId } = useParams();
    const similarSeriesData = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/similar?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    console.log(similarSeriesData);
    return (
        <div>
            {similarSeriesData === null ? (
                <div>Data is loading</div>
            ) : (
                similarSeriesData.results.map((similarSeries) => (
                    <div
                        key={similarSeries.id}
                        style={{
                            border: '1px solid black',
                            margin: '20px',
                        }}
                    >
                        <Link to={`/tv/${similarSeries.id}`}>
                            <img
                                src={
                                    similarSeries.poster_path === null
                                        ? 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png'
                                        : `${imagePrefixApi}${similarSeries.poster_path}`
                                }
                                style={{
                                    width: '40px',
                                }}
                            />
                            <div>{similarSeries.name}</div>
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default TvSeriesSimilar;
