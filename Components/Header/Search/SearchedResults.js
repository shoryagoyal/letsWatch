import { useState, useEffect } from 'react';

import SearchCompanyResult from './SearchResultDisplayComponent/SearchCompanyResult';
import SearchPersonResult from './SearchResultDisplayComponent/SearchPersonResult';
import SearchTVResult from './SearchResultDisplayComponent/SearchTVResult';
import SearchKeywordResult from './SearchResultDisplayComponent/SearchKeywordResult';
import SearchMovieResult from './SearchResultDisplayComponent/SearchMovieResult';

function SearchedResults(props) {
    const { searchedCategory, searchedText, setSearchedResultsShown, searchedResultsShown } = props;
    const [searchedResult, setSearchedResult] = useState(null);

    useEffect(() => {
        // Debouncing
        const timer = setTimeout(() => {
            callSearchApi();
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [searchedText, searchedCategory]);

    async function callSearchApi() {
        if (searchedText.length === 0) return;
        const searchSuggestionData = await fetch(
            `https://api.themoviedb.org/3/search/${searchedCategory}?language=en-US&page=1&query=${searchedText}&api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await searchSuggestionData.json();
        setSearchedResult(json);
    }

    function findComponent(data) {
        if (searchedCategory === 'tv') {
            return (
                <SearchTVResult
                    poster={data.poster_path}
                    name={data.name}
                    releaseDate={data.first_air_date}
                    tvSeriesId={data.id}
                    voteAverage={data.vote_average}
                    voteCount={data.vote_count}
                    key={data.id}
                />
            );
        } else if (searchedCategory === 'person') {
            return (
                <SearchPersonResult
                    profilePhoto={data.profile_path}
                    name={data.name}
                    department={data.known_for_department}
                    peopleId={data.id}
                    key={data.id}
                />
            );
        } else if (searchedCategory === 'company') {
            return <SearchCompanyResult companyLogo={data.logo_path} name={data.name} key={data.id} />;
        } else if (searchedCategory === 'keyword') {
            return <SearchKeywordResult name={data.name} key={data.name} />;
        } else if (searchedCategory === 'movie') {
            return (
                <SearchMovieResult
                    poster={data.poster_path}
                    title={data.title}
                    releaseDate={data.release_date}
                    key={data.id}
                />
            );
        } else {
            // Handle this case later
            if (data.poster_path) {
                console.log('must be a movie or ');
            } else if (data.logo_path) {
                console.log('inside company');
                //return <SearchCompanyResult logo_path={data.logo_path} name={data.name} />;
            } else if (data.profile_path) {
                console.log('inside person');
            } else {
                console.log('inside keyword');
            }
        }
        return <div>Hy</div>;
    }

    if (searchedResult === null) return <></>;
    if (searchedResult.results.length == 0) {
        if (searchedText.length === 0) return <></>;
        return <div className="bg-slate-950 rounded mt-1 absolute w-[100%] p-2">No result found</div>;
    }
    return searchedResultsShown ? (
        <div
            className="bg-slate-950 rounded mt-1 absolute w-[100%]"
            onClick={(e) => {
                // do not close the search result if anything inside search result content is clicked
                e.stopPropagation();
                setSearchedResultsShown(false);
            }}
            data-testid="searchedResults"
        >
            {searchedResult.results.slice(0, 10).map((searchedData) => findComponent(searchedData))}
        </div>
    ) : (
        <></>
    );
}

export default SearchedResults;
