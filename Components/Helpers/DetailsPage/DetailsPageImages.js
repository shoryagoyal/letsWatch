import SectionHeadingWithLink from '../SectionHeadingWithLink';
import useToGetImageSrc from '../../../hooks/useToGetImageSrc';
import ImagesShimmer from '../../Shimmers/ImagesShimmer';
import ScrollBarNavigatorLeftButton from '../ScrollBarNavigatorLeftButton';
import ScrollBarNavigatorRightButton from '../ScrollBarNavigatorRightButton';
import useGetUniqueIdForScrollbar from '../../../hooks/useGetUniqueIdForScrollbar';

function DetailsPageImages(props) {
    const scrollBarId = useGetUniqueIdForScrollbar();

    return (
        <div>
            <SectionHeadingWithLink link={props.linkToAllImagesPage} name="Photos" />
            <div className="flex">
                <ScrollBarNavigatorLeftButton element={document.querySelector(`#${scrollBarId}`)} />
                <div
                    className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5 w-[100%] md:mx-[-5%] mx-[-8%]"
                    id={scrollBarId}
                >
                    {props.images === null
                        ? [...Array(5)].map((_, index) => (
                              <div key={index} className="inline-block w-[24%] mr-[1%] h-[10rem]">
                                  <ImagesShimmer />
                              </div>
                          ))
                        : props.images.map((image) => (
                              <div className="inline-block md:w-[24%] md:mr-[1%] w-[90%] mr-[5%]" key={image.file_path}>
                                  <img src={useToGetImageSrc(image.file_path)} />
                              </div>
                          ))}
                </div>
                <ScrollBarNavigatorRightButton element={document.querySelector(`#${scrollBarId}`)} />
            </div>
        </div>
    );
}
export default DetailsPageImages;
