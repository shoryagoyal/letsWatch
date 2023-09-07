import { useSelector } from 'react-redux';

import TvMovieCard from '../Helpers/TvMovieCard';

function WatchList() {
    const watchListItem = useSelector((state) => state.watchList.watchListItem);

    return (
        <div className="flex flex-wrap">
            {Object.keys(watchListItem).map((item) => (
                <TvMovieCard
                    key={item}
                    image={watchListItem[item].image}
                    vote_average={watchListItem[item].vote_average}
                    vote_count={watchListItem[item].vote_count}
                    name={watchListItem[item].title}
                    toLink={watchListItem[item].toLink}
                    id={item}
                />
            ))}
        </div>
    );
}

export default WatchList;
