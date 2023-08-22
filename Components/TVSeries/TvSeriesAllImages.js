import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import Carousel from '../Helpers/Carousel';

function TvSeriesAllImages() {
    const { tvSeriesId } = useParams();
    const allImages = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );
    if (allImages === null) {
        return <div>Will render shimmer</div>;
    }
    return (
        <div className="w-3/4 border border-indigo-2">
            <Carousel
                images={allImages.backdrops.map((image) => {
                    return useToGetImageSrc(image.file_path);
                })}
            />
        </div>
    );
}

export default TvSeriesAllImages;
