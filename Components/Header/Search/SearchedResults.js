import SearchCompanyResult from './SearchResultDisplayComponent/SearchCompanyResult';
import SearchPersonResult from './SearchResultDisplayComponent/SearchPersonResult';
import SearchTVResult from './SearchResultDisplayComponent/SearchTVResult';
import SearchKeywordResult from './SearchResultDisplayComponent/SearchKeywordResult';
import SearchMovieResult from './SearchResultDisplayComponent/SearchMovieResult';

function SearchedResults(props) {
    const { result, category, isSearchTextEmpty } = props;
    function findComponent(data) {
        if (category === 'tv') {
            return (
                <SearchTVResult
                    poster={data.poster_path}
                    name={data.name}
                    releaseDate={data.first_air_date}
                    tvSeriesId={data.id}
                    voteAverage={data.vote_average}
                    voteCount={data.vote_count}
                    clearSearchedResult={props.clearSearchedResult}
                    key={data.id}
                />
            );
        } else if (category === 'person') {
            return (
                <SearchPersonResult
                    profilePhoto={data.profile_path}
                    name={data.name}
                    department={data.known_for_department}
                    peopleId={data.id}
                    clearSearchedResult={props.clearSearchedResult}
                    key={data.id}
                />
            );
        } else if (category === 'company') {
            return <SearchCompanyResult companyLogo={data.logo_path} name={data.name} key={data.id} />;
        } else if (category === 'keyword') {
            return <SearchKeywordResult name={data.name} />;
        } else if (category === 'movie') {
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
                console.log('insidecompany');
                //return <SearchCompanyResult logo_path={data.logo_path} name={data.name} />;
            } else if (data.profile_path) {
                console.log('inside person');
            } else {
                console.log('inside keyword');
            }
        }
        return <div>Hy</div>;
    }
    if (result.results.length == 0) {
        if (isSearchTextEmpty) return <></>;
        return <div>No result found</div>;
    }
    return (
        <div className="bg-slate-900 rounded mt-1">
            {result.results.slice(0, 10).map((searchedData) => findComponent(searchedData))}
        </div>
    );
}

export default SearchedResults;
