import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import { Link } from 'react-router-dom';

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
    if (tvSeriesList === null) return <div>Data will be loading</div>;
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
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {tvSeriesList.results.map((tvSeries) => (
                        <Link
                            to={`/tv/${tvSeries.id}`}
                            key={tvSeries.id}
                            style={{ border: '1px solid black', margin: '20px', padding: '10px' }}
                        >
                            <div style={{ width: '100px' }}>
                                <img style={{ width: '40px' }} src={useToGetImageSrc(tvSeries.poster_path)} />
                            </div>
                            <div>
                                <div>{tvSeries.name}</div>
                                <div>Vote average: {tvSeries.vote_average}</div>
                                <div>Vote count: {tvSeries.vote_count}</div>
                            </div>
                        </Link>
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
