import { imagePrefixApi } from '../../../constants';

function SearchPersonResult(props) {
    // known_for - Add feature later
    const { profilePhoto, name, department } = props;
    return (
        <div style={{ border: '1px solid black', margin: '5px', width: '200px', display: 'flex' }}>
            <div>
                <img
                    style={{ width: '40px' }}
                    alt="Actor image"
                    src={
                        profilePhoto === null
                            ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                            : `${imagePrefixApi}${profilePhoto.substring(1)}`
                    }
                ></img>
            </div>
            <div>
                <div>{name}</div>
                <div>{department}</div>
            </div>
        </div>
    );
}
export default SearchPersonResult;
