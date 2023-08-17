import { useEffect, useState } from 'react';
import SearchedResults from './SearchedResults';

function SearchBar() {
    const [searchCategory, setSearchCategory] = useState('multi');
    const [searchText, setSearchText] = useState('');
    const [searchedResult, setSearchedResult] = useState('');
    function searchCategoryChangedHandler(e) {
        setSearchedResult('');
        setSearchCategory(e.target.value);
    }

    function searchTextHandler(e) {
        setSearchedResult('');
        setSearchText(e.target.value);
    }

    function clearSearchedResultHandler() {
        setSearchedResult('');
    }
    useEffect(() => {
        // Debouncing
        const timer = setTimeout(() => {
            callSearchApi();
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [searchText, searchCategory]);

    async function callSearchApi() {
        const searchSuggestionData = await fetch(
            `https://api.themoviedb.org/3/search/${searchCategory}?language=en-US&page=1&query=${searchText}&api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await searchSuggestionData.json();
        setSearchedResult(json);
    }
    return (
        <div>
            <div>
                <select
                    name="searchCategory"
                    id="searchCategory"
                    onChange={searchCategoryChangedHandler}
                    value={searchCategory}
                >
                    <option value="multi">All</option>
                    <option value="tv">TV Episodes</option>
                    <option value="person">Celebs</option>
                    <option value="company">Companies</option>
                    <option value="keyword">keywords</option>
                    <option value="movie">Movie</option>
                </select>
            </div>
            <div>
                <input type="text" onChange={searchTextHandler} value={searchText}></input>
            </div>
            {searchedResult === '' ? (
                ''
            ) : (
                <SearchedResults
                    result={searchedResult}
                    category={searchCategory}
                    clearSearchedResult={clearSearchedResultHandler}
                />
            )}
        </div>
    );
}

export default SearchBar;
// https://image.tmdb.org/t/p/original/
// Companies - name, logo_path
// TV - poster_path, name, first_air_date
// Movie - poster_path, title, release_date
// Person - profile_path, name, known_for_department, known_for (To display further details)
// keyword - name
