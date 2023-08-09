import { imagePrefixApi } from '../../../constants';

function SearchCompanyResult(props) {
    const { companyLogo, name } = props;
    return (
        <div style={{ border: '1px solid black', margin: '5px', width: '200px', display: 'flex' }}>
            <div>
                <img
                    style={{ width: '40px' }}
                    alt="Actor image"
                    src={
                        companyLogo === null
                            ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                            : `${imagePrefixApi}${companyLogo}`
                    }
                ></img>
            </div>
            <div>
                <div>{name}</div>
            </div>
        </div>
    );
}

export default SearchCompanyResult;
