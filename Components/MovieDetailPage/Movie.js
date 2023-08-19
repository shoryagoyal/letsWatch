import { useParams } from 'react-router-dom';

function Movie() {
    const { movieId } = useParams();
    return <div>Movie detail page</div>;
}
export default Movie;
