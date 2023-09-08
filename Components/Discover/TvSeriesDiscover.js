import { useState } from 'react';

import useFetch from '../../hooks/useFetch';
import Pagination from '../Helpers/Pagination';
import TvMovieCard from '../Helpers/TvMovieCard';
import TvMoviesCardShimmer from '../Shimmers/TvMovieCardShimmer';

function TvSeriesDiscover() {
    const [pageNumber, setPageNumber] = useState(1);
    const [sortBy, setSortBy] = useState('popularity.desc');
    const tvSeriesList = useFetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${pageNumber}&sort_by=${sortBy}`,
    );

    function pageNumberChangeHandler(currPageNumber) {
        setPageNumber(currPageNumber);
    }
    function changeSortByHandler(e) {
        setSortBy(e.target.value);
    }

    if (tvSeriesList === null) {
        return (
            <div className="flex flex-wrap justify-center">
                {[...Array(12)].map((_, index) => (
                    <TvMoviesCardShimmer key={index} />
                ))}
            </div>
        );
    }
    return (
        <div>
            <div className="absolute top-0 right-0">
                <label>Sort by</label>
                <select name="tvSort" id="tvSort" onChange={changeSortByHandler} value={sortBy}>
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
                    {tvSeriesList.results.map((tvSeries) => (
                        <TvMovieCard
                            image={tvSeries.poster_path}
                            id={tvSeries.id}
                            vote_average={tvSeries.vote_average}
                            vote_count={tvSeries.vote_count}
                            name={tvSeries.name}
                            key={tvSeries.id}
                            toLink={'/tv/' + tvSeries.id}
                        />
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
