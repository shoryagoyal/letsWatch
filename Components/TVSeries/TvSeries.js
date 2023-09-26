import TvSeriesImages from './TvSeriesImages';
import TvSeriesReview from './TvSeriesReview';
import TvSeriesCast from './TvSeriesCast';
import TvSeriesSimilar from './TvSeriesSimilar';
import TvSeriesDetails from './TvSeriesDetails';

function TvSeries() {
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
