import { imagePrefixApi } from '../../../../constants';

function SearchCompanyResult(props) {
    const { companyLogo, name } = props;
    return (
        <div className="flex p-2 border-b-2 border-white-500 hover:bg-slate-700">
            <div className="w-[12%] flex justify-center items-center mr-[3%]">
                <img
                    className="h-[100%]"
                    alt="Actor image"
                    src={
                        companyLogo === null
                            ? 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                            : `${imagePrefixApi}${companyLogo}`
                    }
                ></img>
            </div>
            <div className="w-[100%]">
                <div className="font-medium" data-testid="companySearchedResults_name">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default SearchCompanyResult;
