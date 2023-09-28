import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TvSeriesImages from './TvSeriesImages';
import TvSeriesReview from './TvSeriesReview';
import TvSeriesCast from './TvSeriesCast';
import TvSeriesSimilar from './TvSeriesSimilar';
import TvSeriesDetails from './TvSeriesDetails';

function TvSeries() {
    const { tvSeriesId } = useParams();
    const [data, setData] = useState(null);
    async function getData() {
        const responses = await Promise.all([
            fetch(
                `https://api.themoviedb.org/3/tv/${tvSeriesId}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
            fetch(
                `https://api.themoviedb.org/3/tv/${tvSeriesId}/aggregate_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
            fetch(
                `https://api.themoviedb.org/3/tv/${tvSeriesId}/videos?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
            fetch(
                `https://api.themoviedb.org/3/tv/${tvSeriesId}/similar?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
            ),
        ]).then((results) => Promise.all(results.map((r) => r.json())));
        setData(responses);
    }
    useEffect(() => {
        getData();
    }, [tvSeriesId]);
    if (data === null) return <div>Data is loading</div>;
    const images = data == null ? null : data[0];
    const casts = data == null ? null : data[1];
    const videos = data[2];
    const similarSeries = data === null ? null : data[3];

    return (
        <div>
            <TvSeriesDetails />
            <TvSeriesImages tvSeriesImages={images === null ? null : images.backdrops.slice(0, 20)} id={tvSeriesId} />
            <TvSeriesReview />
            <TvSeriesCast tvSeriesCasts={casts === null ? null : casts.cast.splice(0, 18)} id={tvSeriesId} />
            <TvSeriesSimilar tvSeriesSimilarSeries={similarSeries} />
        </div>
    );
}

export default TvSeries;
