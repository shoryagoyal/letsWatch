import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import useCheckWhetherItemPresentInWatchList from '../../hooks/useCheckWhetherItemPresentInWatchList';
import { addToWatchList, removeFromWatchList } from '../../utils/slices/watchListSlice';

function TvMovieCard(props) {
    const { name, image, vote_average, toLink, vote_count, id } = props;
    const dispatch = useDispatch();
    const btnStyle = 'w-[100%] rounded bg-slate-700 hover:bg-blue-950 px-2';

    return (
        <div className="bg-slate-800 w-[100%] rounded-br-lg rounded-bl-lg">
            <div className="h-70">
                <Link to={toLink}>
                    <img src={useToGetImageSrc(image)} className="h-[100%]"></img>
                </Link>
            </div>
            <div className="px-[4%] pt-1 w-[100%]">
                <div className="h-10 flex justify-between">
                    <div className="flex">
                        <span className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 bi bi-star-fill" fill="yellow">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                        <span className="text-white flex justify-center items-center ml-1">
                            {vote_average.toFixed(1)}
                        </span>
                    </div>
                    <div className="flex text-white justify-center items-center">
                        {vote_count} {vote_count === 1 ? 'vote' : 'votes'}
                    </div>
                </div>
                <div className="h-16 whitespace-normal">
                    <Link to={toLink} className="text-white hover:underline">
                        {name}
                    </Link>
                </div>
                <div className="h-16 whitespace-normal text-blue-400">
                    {useCheckWhetherItemPresentInWatchList(id) ? (
                        <button
                            className={btnStyle}
                            data-testid="addToWatchListButton"
                            onClick={() =>
                                dispatch(
                                    addToWatchList({
                                        id: id,
                                        image: image,
                                        name: name,
                                        toLink: toLink,
                                        vote_average: vote_average,
                                        vote_count: vote_count,
                                    }),
                                )
                            }
                        >
                            + WatchList
                        </button>
                    ) : (
                        <button
                            className={btnStyle}
                            onClick={() => dispatch(removeFromWatchList(id))}
                            data-testid="removeFromWatchListButton"
                        >
                            Remove from WatchList
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TvMovieCard;
