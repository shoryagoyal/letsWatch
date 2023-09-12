import { imagePrefixApi } from '../../../../constants';
import { Link } from 'react-router-dom';

function SearchTVResult(props) {
    const { poster, name, releaseDate, tvSeriesId, voteCount, voteAverage } = props;
    return (
        <Link to={`/tv/${tvSeriesId}`}>
            <div className="flex p-2 border-b-2 border-white-500 hover:bg-slate-700">
                <div className="w-[12%] flex justify-center items-center mr-[3%]">
                    <img
                        className="h-[100%]"
                        alt="Movie poster"
                        src={
                            poster === null
                                ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                                : `${imagePrefixApi}${poster}`
                        }
                    ></img>
                </div>
                <div className="w-[100%]">
                    <div className="font-medium">{name}</div>
                    <div className="font-thin">{releaseDate}</div>
                    <div className="flex justify-between font-thin">
                        <div className="flex justify-center items-center">
                            <span className="pr-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star-fill"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                            <span>{voteAverage.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="pr-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-people-fill"
                                >
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                </svg>
                            </span>
                            <span>{voteCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SearchTVResult;
