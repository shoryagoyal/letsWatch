import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { imagePrefixApi } from '../../constants';

function TvSeriesReview() {
    const { tvSeriesId } = useParams();
    const data = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/reviews?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    return (
        <div>
            {data == null ? (
                <div>Data will be loaded </div>
            ) : (
                data.results.map((review) => (
                    <div key={review.id} style={{ border: '1px solid black', margin: '10px' }}>
                        <div>
                            <img
                                src={
                                    review.author_details.avatar_path == null
                                        ? 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png'
                                        : `${imagePrefixApi}${review.author_details.avatar_path}`
                                }
                                style={{ width: '40px' }}
                            />
                        </div>
                        <div>
                            <div>
                                {/* Add link to profile page component */}
                                {review.author}
                            </div>
                            <div>{review.content}</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default TvSeriesReview;
