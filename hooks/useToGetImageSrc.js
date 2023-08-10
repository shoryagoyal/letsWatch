import { imagePrefixApi } from '../constants';

function useToGetImageSrc(imageUrl) {
    if (imageUrl === null) {
        return 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png';
    }
    return `${imagePrefixApi}${imageUrl}`;
}

export default useToGetImageSrc;
