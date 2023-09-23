import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import DetailsPagePhotoVideoHeader from '../Helpers/DetailsPagePhotoVideoHeader';

function CelebDetailsHeader() {
    const { celebId } = useParams();
    const data = useFetch(
        `https://api.themoviedb.org/3/person/${celebId}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&append_to_response=videos`,
    );
    const posterUrl = useToGetImageSrc(data === null ? null : data.profile_path);

    return (
        <div>
            {data != null && <DetailsPagePhotoVideoHeader poster={posterUrl} videoKey={[]} />}
            <div>Hy</div>
        </div>
    );
}

export default CelebDetailsHeader;
