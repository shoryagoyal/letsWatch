import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import TvMoviesCard from './TvMoviesCard';
import Pagination from '../Helpers/Pagination';

function TvSeriesDiscover() {
    const [pageNumber, setPageNumber] = useState(1);
    const [sortBy, setSortBy] = useState('popularity.desc');
    const moviesList = useFetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${pageNumber}&sort_by=${sortBy}`,
    );
    console.log(moviesList);
    function pageNumberChangeHandler(currPageNumber) {
        setPageNumber(currPageNumber);
    }
    function changeSortByHandler(e) {
        setSortBy(e.target.value);
    }

    if (moviesList === null) return <div>Data will be loading</div>;
    return (
        <div>
            <div>
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
                    {moviesList.results.map((movie) => (
                        <TvMoviesCard
                            imageUrl={movie.poster_path}
                            id={movie.id}
                            vote_average={movie.vote_average}
                            vote_count={movie.vote_count}
                            name={movie.title}
                            key={movie.id}
                            toLink={`/movie/${movie.id}`}
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
