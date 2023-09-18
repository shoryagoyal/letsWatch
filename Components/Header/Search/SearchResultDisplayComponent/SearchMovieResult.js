import { imagePrefixApi } from '../../../../constants';

function SearchMovieResult(props) {
    const { poster, title, releaseDate } = props;
    return (
        <div className="flex p-2 border-b-2 border-white-500 hover:bg-slate-700">
            <div className="w-[12%] flex justify-center items-center mr-[3%]">
                <img
                    className="h-[100%]"
                    alt={`${title} image`}
                    src={
                        poster === null
                            ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                            : `${imagePrefixApi}${poster}`
                    }
                ></img>
            </div>
            <div>
                <div className="font-medium" data-testid="movieSearchedResults_name">
                    {title}
                </div>
                <div className="font-thin">{releaseDate}</div>
            </div>
        </div>
    );
}

export default SearchMovieResult;
