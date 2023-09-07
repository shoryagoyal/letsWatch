import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import { addToWatchList, removeFromWatchList } from '../../utils/slices/watchListSlice';
import useCheckWhetherItemPresentInWatchList from '../../hooks/useCheckWhetherItemPresentInWatchList';

function TvMoviesCard({ imageUrl, name, vote_average, vote_count, id, toLink }) {
    const dispatch = useDispatch();

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105 m-4">
            <img className="w-full h-96" src={useToGetImageSrc(imageUrl)} alt={name} />
            <div className="px-6 py-4">
                <Link to={toLink}>
                    <div className="font-bold text-xl mb-2 hover:underline">{name}</div>
                </Link>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 1a9 9 0 100 18 9 9 0 000-18zm-.293 12.293a1 1 0 001.414 0L10 11.414l2.293 2.293a1 1 0 101.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-700">{vote_average}</span>
                    </div>
                    <div className="text-gray-700">
                        {vote_count} {vote_count === 1 ? 'vote' : 'votes'}
                    </div>
                </div>
            </div>
            <div className="px-6 py-4">
                {useCheckWhetherItemPresentInWatchList(id) ? (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                        onClick={() =>
                            dispatch(
                                addToWatchList({
                                    id: id,
                                    image: imageUrl,
                                    name: name,
                                    toLink: toLink,
                                    vote_average: vote_average,
                                    vote_count: vote_count,
                                }),
                            )
                        }
                    >
                        Add to Watchlist
                    </button>
                ) : (
                    <button
                        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full w-full"
                        onClick={() => dispatch(removeFromWatchList(id))}
                    >
                        Remove from Watchlist
                    </button>
                )}
            </div>
        </div>
    );
}

export default TvMoviesCard;
