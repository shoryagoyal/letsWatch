import { imagePrefixApi } from '../../../../constants';
import { Link } from 'react-router-dom';

function SearchTVResult(props) {
    const { poster, name, releaseDate, tvSeriesId } = props;
    return (
        <Link
            to={`/tv/${tvSeriesId}`}
            onClick={() => {
                props.clearSearchedResult();
            }}
        >
            <div style={{ border: '1px solid black', margin: '5px' }}>
                <div>
                    <img
                        style={{ width: '40px' }}
                        alt="Movie poster"
                        src={
                            poster === null
                                ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                                : `${imagePrefixApi}${poster}`
                        }
                    ></img>
                </div>
                <div>
                    <div>{name}</div>
                    <div>{releaseDate}</div>
                </div>
            </div>
        </Link>
    );
}

export default SearchTVResult;
