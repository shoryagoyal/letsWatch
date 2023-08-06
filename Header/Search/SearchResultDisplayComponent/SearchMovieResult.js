import { imagePrefixApi } from '../../../constants';

function SearchMovieResult(props) {
    const { poster, title, releaseDate } = props;
    return (
        <div style={{ border: '1px solid black', margin: '5px', width: '200px', display: 'flex' }}>
            <div>
                <img
                    style={{ width: '40px' }}
                    alt="Actor image"
                    src={
                        poster === null
                            ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                            : `${imagePrefixApi}${poster.substring(1)}`
                    }
                ></img>
            </div>
            <div>
                <div>{title}</div>
                <div>{releaseDate}</div>
            </div>
        </div>
    );
}

export default SearchMovieResult;
