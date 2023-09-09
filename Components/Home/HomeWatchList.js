import { useSelector } from 'react-redux';

import TvMovieCard from '../Helpers/TvMovieCard';
import HomeSectionHeadings from './HomeSectionHeadings';

function HomeWatchList() {
    const watchList = useSelector((store) => store.watchList.watchListItem);
    console.log(watchList);
    return (
        <div>
            <div>
                <HomeSectionHeadings name="From your WatchList" />
            </div>
            <div className="flex flex-wrap">
                {Object.keys(watchList).map((item) => (
                    <TvMovieCard
                        key={item}
                        image={watchList[item].image}
                        vote_average={watchList[item].vote_average}
                        vote_count={watchList[item].vote_count}
                        name={watchList[item].title}
                        toLink={watchList[item].toLink}
                        id={item}
                    />
                ))}
            </div>
        </div>
    );
}
export default HomeWatchList;
