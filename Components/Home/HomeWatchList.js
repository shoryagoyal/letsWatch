import { useSelector } from 'react-redux';

import TvMovieCard from '../Helpers/TvMovieCard';
import HomeSectionHeadings from './HomeSectionHeadings';

function HomeWatchList() {
    const watchListItem = useSelector((store) => store.watchList.watchListItem);

    return (
        <div>
            <div>
                <HomeSectionHeadings name="From your WatchList" />
            </div>
            {Object.keys(watchListItem).length === 0 ? (
                <div className="text-white">
                    <div className="text-xl mb-5">Watch list is empty</div>
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {Object.keys(watchListItem).map((item) => (
                        <TvMovieCard
                            key={item}
                            image={watchListItem[item].image}
                            vote_average={watchListItem[item].vote_average}
                            vote_count={watchListItem[item].vote_count}
                            name={watchListItem[item].name}
                            toLink={watchListItem[item].toLink}
                            id={item}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default HomeWatchList;
