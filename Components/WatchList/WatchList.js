import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import TvMovieCard from '../Helpers/TvMovieCard';

function WatchList() {
    const watchListItem = useSelector((state) => state.watchList.watchListItem);

    return (
        <div data-testid="watchListPage">
            <div className="text-white text-2xl font-bold pt-10 pb-5">My watchList</div>
            {Object.keys(watchListItem).length === 0 ? (
                <div className="text-white">
                    <div className="text-xl mb-5">Watch list is empty</div>
                    <div className="flex pb-5">
                        <Link to="/discover/tv" className="bg-yellow-400 rounded text-black p-2 hover:brightness-[90%]">
                            <div>Add Tv Series</div>
                        </Link>
                        <Link
                            to="/discover/movies"
                            className="bg-yellow-400 rounded text-black p-2 hover:brightness-[90%] ml-5"
                        >
                            <div>Add Movies</div>
                        </Link>
                    </div>
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

export default WatchList;
