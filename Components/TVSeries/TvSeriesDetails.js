import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import { showStarRatingModal } from '../../utils/slices/starRatingModalShown';
import RatingModal from '../Helpers/RatingModal';
import DetailsPagePhotoVideoHeader from '../Helpers/DetailsPagePhotoVideoHeader';
import { addToWatchList } from '../../utils/slices/watchListSlice';

function TvSeriesDetails(props) {
    const { seriesId } = props;

    const dispatch = useDispatch();
    const { id, name, starRatingModalVisible } = useSelector((state) => state.starRatingModalShown);
    const details = useFetch(
        `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&append_to_response=videos`,
    );
    const posterUrl = useToGetImageSrc(details === null ? null : details.poster_path);

    return (
        <div>
            {details === null ? (
                <div>Data is coming</div>
            ) : (
                <div>
                    {starRatingModalVisible && <RatingModal />}
                    <div className="flex justify-between text-white pt-3">
                        <div>
                            <div className="text-5xl">{details.name}</div>
                        </div>
                        <div className="flex w-[25%] justify-between">
                            <div>
                                <div>IMdB Rating</div>
                                <div className="py-1 hover:bg-slate-600 flex items-center justify-center hover:rounded text-xl font-bold">
                                    <div className="mr-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="yellow"
                                            className="bi bi-star-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div>{details.vote_average.toFixed(1)}/10</div>
                                </div>
                            </div>
                            <div>
                                <div>Your rating</div>
                                <div
                                    className="py-1 hover:bg-slate-600 flex items-center justify-center hover:rounded text-xl font-bold text-blue-900"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            showStarRatingModal({
                                                id: details.id,
                                                name: details.name,
                                            }),
                                        );
                                    }}
                                >
                                    <div className="mr-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-star"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div>Rate</div>
                                </div>
                            </div>
                            <div>
                                <div>Popularity</div>
                                <div className="py-1 hover:bg-slate-600 flex items-center justify-center hover:rounded text-xl font-bold">
                                    {details.popularity.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <DetailsPagePhotoVideoHeader
                        poster={posterUrl}
                        videoKey={props.videoKeyVal}
                        videosCount={props.videosCount}
                        imagesCount={props.imagesCount}
                        tvSeriesId={seriesId}
                    />
                    <div className="flex mt-3">
                        <div className="w-[65%]">
                            <div className="flex">
                                {details != null &&
                                    details.genres.map((genre) => (
                                        <div
                                            className="border text-white rounded-full px-2 py-1 mr-2 hover:cursor-pointer hover:bg-slate-700"
                                            key={genre.id}
                                        >
                                            {genre.name}
                                        </div>
                                    ))}
                            </div>
                            <div>
                                <div>
                                    <div className="text-white border-b py-2">{details.overview}</div>
                                </div>
                                <div className="flex py-2">
                                    <div className="text-white mr-3 font-bold">Creators</div>
                                    <div className="flex">
                                        {details.created_by.map((creator, index) => (
                                            <div key={creator.id}>
                                                <Link
                                                    to={`/people/${creator.id}`}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    {creator.name}
                                                </Link>
                                                {index !== details.created_by.length - 1 && (
                                                    <span className="text-white mx-2">&#183;</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[35%] flex justify-center items-center">
                            <button
                                className="w-[80%] border rounded py-2 text-left pl-2 bg-slate-600 text-white hover:brightness-[120%]"
                                onClick={() =>
                                    dispatch(
                                        addToWatchList({
                                            id: seriesId,
                                            image: details.poster_path,
                                            name: details.name,
                                            toLink: `/tv/${seriesId}`,
                                            vote_average: details.vote_average,
                                            vote_count: details.vote_count,
                                        }),
                                    )
                                }
                            >
                                Add to WatchList
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default TvSeriesDetails;
