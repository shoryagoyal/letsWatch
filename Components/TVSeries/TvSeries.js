import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TvSeriesReview from './TvSeriesReview';
import TvSeriesCast from './TvSeriesCast';
import TvSeriesDetails from './TvSeriesDetails';
import DetailsPageImages from '../Helpers/DetailsPage/DetailsPageImages';
import DetailsPageTvMovieCards from '../Helpers/DetailsPage/DetailsPageTvMovieCards';

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

    const images = data == null ? null : data[0];
    const imagesSize = images === null ? 0 : images.backdrops.length + images.posters.length + images.logos.length;
    const casts = data == null ? null : data[1];
    const videos = data === null ? null : data[2];
    const similarSeries = data === null ? null : data[3].results.slice(0, 20);
    let videoKey = null;
    if (videos !== null) {
        for (let video of videos.results) {
            if (video.site === 'YouTube') {
                videoKey = video.key;
                break;
            }
        }
    }

    return (
        <div>
            <TvSeriesDetails
                videosCount={videos === null ? null : videos.results.length}
                videoKeyVal={videoKey}
                imagesCount={imagesSize}
                seriesId={tvSeriesId}
            />
            <DetailsPageImages
                images={images === null ? null : images.backdrops.slice(0, 20)}
                linkToAllImagesPage={`/tv/${tvSeriesId}/allImages`}
            />
            <TvSeriesCast tvSeriesCasts={casts === null ? null : casts.cast.splice(0, 18)} id={tvSeriesId} />
            <DetailsPageTvMovieCards toLinkPrefix="tv" heading="More like this" data={similarSeries} />
            <TvSeriesReview />
        </div>
    );
}

export default TvSeries;
