import { imagePrefixApi } from '../../../../constants';
import { Link } from 'react-router-dom';

function SearchPersonResult(props) {
    // known_for - Add feature later
    const { profilePhoto, name, department } = props;
    return (
        <Link to={`/people/${props.peopleId}`}>
            <div className="flex p-2 border-b-2 border-white-500 hover:bg-slate-700">
                <div className="w-[12%] flex justify-center items-center mr-[3%]">
                    <img
                        className="h-[100%]"
                        alt={`${name} image`}
                        src={
                            profilePhoto === null
                                ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                                : `${imagePrefixApi}${profilePhoto}`
                        }
                    ></img>
                </div>
                <div className="w-[100%]">
                    <div className="font-medium">{name}</div>
                    <div className="font-thin">{department}</div>
                </div>
            </div>
        </Link>
    );
}
export default SearchPersonResult;
