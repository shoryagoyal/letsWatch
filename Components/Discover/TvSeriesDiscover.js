import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';

function TvSeriesDiscover() {
    const [pageNumber, setPageNumber] = useState(1);
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
    console.log(pageNumber);
    const tvSeriesList = useFetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${pageNumber}`,
    );
    return (
        <div>
            <div>
                {tvSeriesList === null ? (
                    <div>Data will be loading</div>
                ) : (
                    <div style={{ display: 'flex' }}>
                        {tvSeriesList.results.map((tvSeries) => (
                            <div style={{ width: '100px' }}>
                                <img style={{ width: '40px' }} src={useToGetImageSrc(tvSeries.poster_path)} />
                            </div>
                        ))}
                    </div>
                )}
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
