import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TvSeriesImages from './TvSeriesImages';
import TvSeriesReview from './TvSeriesReview';
import TvSeriesCast from './TvSeriesCast';
import TvSeriesSimilar from './TvSeriesSimilar';
import TvSeriesDetails from './TvSeriesDetails';

function TvSeries() {
    const { tvSeriesId } = useParams();
    console.log('tvSeriesId=' + tvSeriesId);
    useEffect(() => {
        console.log('API called');
    }, [tvSeriesId]);
    return (
        <div>
            <TvSeriesDetails />
            <TvSeriesImages />
            <TvSeriesReview />
            <TvSeriesCast />
            <TvSeriesSimilar />
        </div>
    );
}

export default TvSeries;
