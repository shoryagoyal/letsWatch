import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function WatchList() {
    const watchListSize = useSelector((state) => state.watchList.watchListItem);

    return (
        <Link to="/user/watchList" data-testid="watchListPageLink">
            <div className="px-6 pt-1 hover:bg-slate-700 hover:rounded h-8 hover:cursor-pointer">
                <span>WatchList</span>
                <span className="ml-1 border px-2 rounded-full" data-testid="watchListSize">
                    {Object.keys(watchListSize).length}
                </span>
            </div>
        </Link>
    );
}
export default WatchList;
