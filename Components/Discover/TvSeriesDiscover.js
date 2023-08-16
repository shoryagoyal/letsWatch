import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import { Link } from 'react-router-dom';
import TvMoviesCard from './TvMoviesCard';

function TvSeriesDiscover() {
    const [pageNumber, setPageNumber] = useState(1);
    const [sortBy, setSortBy] = useState('popularity.desc');
    const tvSeriesList = useFetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${pageNumber}&sort_by=${sortBy}`,
    );
    function nextButtonClickHandler() {
        setPageNumber((prevPage) => {
            if (prevPage == 10) return 10;
            return prevPage + 1;
        });
    }
    function prevButtonClickHandler() {
        setPageNumber((prevPage) => {
            if (prevPage == 1) return 1;
            return prevPage - 1;
        });
    }
    function changePageNumber(page) {
        console.log('clicked');
        setPageNumber(page);
    }
    function changeSortByHandler(e) {
        setSortBy(e.target.value);
    }
    console.log(pageNumber);
    // return <h1 className="text-5xl font-bold underline">Hello world!</h1>;
    if (tvSeriesList === null) return <div>Data will be loading</div>;
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
                        <TvMoviesCard
                            imageUrl={tvSeries.poster_path}
                            id={tvSeries.id}
                            vote_average={tvSeries.vote_average}
                            vote_count={tvSeries.vote_count}
                            key={tvSeries.id}
                        />
                    ))}
                </div>
            </div>
            <div>
                <span onClick={prevButtonClickHandler}>Prev</span>
                <span>
                    {[...Array(10)].map((val, index) => (
                        <span
                            key={index}
                            style={{ margin: '10px' }}
                            // onClick={() => {
                            //     console.log('Hy');
                            //     setPageNumber(index + 1);
                            // }}
                            onClick={() => changePageNumber(index + 1)}
                            //onClick={changePageNumber(index + 1)}   // This code is giving TLE error {Find it out}
                        >
                            {index + 1}
                        </span>
                    ))}
                </span>
                <span onClick={nextButtonClickHandler}>Next</span>
            </div>
        </div>
    );
}

export default TvSeriesDiscover;
