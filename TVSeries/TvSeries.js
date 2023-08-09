import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TvSeriesImages from './TvSeriesImages';
import TvSeriesReview from './TvSeriesReview';
import TvSeriesCast from './TvSeriesCast';

function TvSeries() {
    const { tvSeriesId } = useParams();
    console.log('tvSeriesId=' + tvSeriesId);
    useEffect(() => {
        console.log('API called');
    }, [tvSeriesId]);
    return (
        <div>
            {/* <TvSeriesImages /> */}
            {/* <TvSeriesReview /> */}
            {/* <TvSeriesCast /> */}
        </div>
    );
}

export default TvSeries;
