import { useSelector } from 'react-redux';

import WatchListSingleItem from './WatchListSingleItem';

function WatchList() {
    const watchListItem = useSelector((state) => state.watchList.watchListItem);

    return (
        <div className="flex flex-wrap">
            {Object.keys(watchListItem).map((item) => (
                <WatchListSingleItem key={item} details={watchListItem[item]} id={item} />
            ))}
        </div>
    );
}

export default WatchList;
