import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CelebImages from './CelebImages';
import CelebMovies from './CelebMovies';
import CelebTvSeries from './CelebTvSeries';

function People() {
    const { celebId } = useParams();
    console.log('rendering taking place');
    async function data() {
        const data = await fetch(
            `https://api.themoviedb.org/3/person/${celebId}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await data.json();
        console.log(json);
    }
    useEffect(() => {
        data();
    }, [celebId]);
    return (
        <div>
            <CelebImages />
            <CelebMovies />
            <CelebTvSeries />
        </div>
    );
}

export default People;
