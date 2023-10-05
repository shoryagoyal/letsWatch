import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CelebDetailsHeader from './CelebDetailsHeader';
import DetailsPageImages from '../Helpers/DetailsPage/DetailsPageImages';
import DetailsPageTvMovieCards from '../Helpers/DetailsPage/DetailsPageTvMovieCards';

function People() {
    const { celebId } = useParams();
    console.log('rendering taking place');
    const [data, setData] = useState(null);

    async function getData() {
        const responses = await Promise.all([
            fetch(
                `https://api.themoviedb.org/3/person/${celebId}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
            fetch(
                `https://api.themoviedb.org/3/person/${celebId}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
            fetch(
                `https://api.themoviedb.org/3/person/${celebId}/tv_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
        ]).then((results) => Promise.all(results.map((r) => r.json())));
        setData(responses);
    }
    useEffect(() => {
        getData();
    }, [celebId]);

    const images = data == null ? null : data[0];
    const movies = data == null ? null : [...data[1].cast, ...data[1].crew];
    const tvSeries = data == null ? null : [...data[2].cast, ...data[2].crew];

    return (
        <div>
            <CelebDetailsHeader />
            <DetailsPageImages images={images === null ? null : images.profiles} linkToAllImagesPage={'#'} />
            <DetailsPageTvMovieCards
                heading={'Movies'}
                data={movies == null ? null : movies.splice(0, 20)}
                toLinkPrefix="movie"
            />
            <DetailsPageTvMovieCards
                heading={'Tv Series'}
                data={movies == null ? null : tvSeries.splice(0, 20)}
                toLinkPrefix="tv"
            />
        </div>
    );
}

export default People;
