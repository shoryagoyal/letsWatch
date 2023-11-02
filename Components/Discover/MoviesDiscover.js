import { useState } from 'react';

import useFetch from '../../hooks/useFetch';
import Pagination from '../Helpers/Pagination';
import TvMovieCard from '../Helpers/TvMovieCard';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';

function TvSeriesDiscover() {
    const [pageNumber, setPageNumber] = useState(1);
    const [sortBy, setSortBy] = useState('popularity.desc');
    const moviesList = useFetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${pageNumber}&sort_by=${sortBy}`,
    );

    function pageNumberChangeHandler(currPageNumber) {
        setPageNumber(currPageNumber);
    }
    function changeSortByHandler(e) {
        setSortBy(e.target.value);
    }

    if (moviesList === null) {
        return (
            <div className="flex flex-wrap justify-center">
                {[...Array(12)].map((_, index) => (
                    <div
                        className="xl:w-[15%] xl:mx-[0.5%]  md:w-[23%] md:mx-[0.8%] md:my-[1%] my-[5%] w-[48%] mx-[1%]"
                        key={index}
                    >
                        <TvMoviesCardShimmer />
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div>
            <div className="sm:flex justify-center items-center py-4 text-lg">
                <label className="text-white mx-5">Sort by</label>
                <select
                    name="tvSort"
                    id="tvSort"
                    onChange={changeSortByHandler}
                    value={sortBy}
                    className="sm:px-4 sm:py-2 rounded"
                >
                    <option value="popularity.asc">Popularity ascending</option>
                    <option value="popularity.desc">Popularity descending</option>
                    <option value="vote_average.asc">Vote average ascending</option>
                    <option value="vote_average.desc">Vote average descending</option>
                    <option value="vote_count.asc">Vote Count ascending</option>
                    <option value="vote_count.desc">Vote count descending</option>
                </select>
            </div>
            <div>
                <div className="flex flex-wrap justify-center">
                    {moviesList.results.map((movie) => (
                        <div
                            className="xl:w-[15%] xl:mx-[0.5%]  md:w-[23%] md:mx-[0.8%] md:my-[1%] my-[5%] w-[48%] mx-[1%]"
                            key={movie.id}
                        >
                            <TvMovieCard
                                image={movie.poster_path}
                                id={movie.id}
                                vote_average={movie.vote_average}
                                vote_count={movie.vote_count}
                                name={movie.title}
                                toLink={`/movie/${movie.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Pagination totalPageNumber={10} sendPageNumberToParent={pageNumberChangeHandler} />;
            </div>
        </div>
    );
}

export default TvSeriesDiscover;
