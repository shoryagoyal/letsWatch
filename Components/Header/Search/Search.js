import { useEffect, useState } from 'react';
import SearchedResults from './SearchedResults';

function SearchBar() {
    const [searchCategory, setSearchCategory] = useState('multi');
    const [searchText, setSearchText] = useState('');
    const [searchedResult, setSearchedResult] = useState('');
    const [searchFieldFocused, setSearchFieldFocused] = useState(false);

    function searchFieldOnFocusHandler() {
        setSearchFieldFocused(true);
    }
    function searchFieldOnBlurHandler() {
        setSearchFieldFocused(false);
    }
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
            <div className="flex w-full h-8 text-black">
                <div className="flex justify-center">
                    <select
                        className="border border-black rounded-tl rounded-bl w-[100%]"
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
                <div className="w-full">
                    <input
                        className="border border-black w-full rounded-tr rounded-br h-8 py-1 px-2"
                        type="text"
                        onChange={searchTextHandler}
                        value={searchText}
                        placeholder="Search Lets watch"
                        onFocus={searchFieldOnFocusHandler}
                        onBlur={searchFieldOnBlurHandler}
                    ></input>
                </div>
            </div>
            <div className="relative">
                {searchedResult === ''
                    ? ''
                    : searchFieldFocused && (
                          <SearchedResults
                              result={searchedResult}
                              category={searchCategory}
                              clearSearchedResult={clearSearchedResultHandler}
                              isSearchTextEmpty={searchText.length === 0}
                          />
                      )}
            </div>
        </div>
    );
}

export default SearchBar;
