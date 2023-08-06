import { imagePrefixApi } from '../../../constants';

function SearchTVResult(props) {
    const { poster, name, releaseDate } = props;
    return (
        <div style={{ border: '1px solid black', margin: '5px' }}>
            <div>
                <img style={{ width: '40px' }} alt="Movie poster" src={`${imagePrefixApi}${poster.substring(1)}`}></img>
            </div>
            <div>
                <div>{name}</div>
                <div>{releaseDate}</div>
            </div>
        </div>
    );
}

export default SearchTVResult;
