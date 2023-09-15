import { useState } from 'react';
import SearchedResults from './SearchedResults';

function SearchBar(props) {
    const [searchCategory, setSearchCategory] = useState('multi');
    const [searchText, setSearchText] = useState('');

    function searchCategoryChangedHandler(e) {
        setSearchCategory(e.target.value);
    }

    function searchTextHandler(e) {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <div className="flex w-full h-8 text-black" data-testid="search">
                <div className="flex justify-center">
                    <select
                        className="border border-black rounded-tl rounded-bl w-[100%]"
                        name="searchCategory"
                        id="searchCategory"
                        onChange={searchCategoryChangedHandler}
                        value={searchCategory}
                        data-testid="searchCategories"
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
                        onClick={(e) => {
                            props.setSearchedResultsShown(true);
                            e.stopPropagation();
                        }}
                        data-testid="searchText"
                    ></input>
                </div>
            </div>
            <div className="relative">
                <SearchedResults
                    searchedCategory={searchCategory}
                    searchedText={searchText}
                    searchedResultsShown={props.searchedResultsShown}
                    setSearchedResultsShown={props.setSearchedResultsShown}
                />
            </div>
        </div>
    );
}

export default SearchBar;
