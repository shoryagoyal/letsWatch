import { useState } from 'react';

import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import ImagesShimmer from '../Shimmers/ImagesShimmer';
import ScrollBarNavigatorLeftButton from '../Helpers/ScrollBarNavigatorLeftButton';
import ScrollBarNavigatorRightButton from '../Helpers/ScrollBarNavigatorRightButton';
import useGetUniqueIdForScrollbar from '../../hooks/useGetUniqueIdForScrollbar';

function TvSeriesImages(props) {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const scrollBarId = useGetUniqueIdForScrollbar();

    return (
        <div>
            <SectionHeadingWithLink link={`/tv/${props.id}/allImages`} name="Photos" />
            <div className="flex">
                <ScrollBarNavigatorLeftButton
                    scrollPercentageVal={scrollPercentage}
                    element={document.querySelector(`#${scrollBarId}`)}
                />
                <div
                    className="overflow-x-scroll whitespace-nowrap no-scrollbar py-5 w-[100%] md:mx-[-5%] mx-[-8%]"
                    id={scrollBarId}
                    onScroll={() => {
                        const ele = document.querySelector(`#${scrollBarId}`);
                        setScrollPercentage((ele.scrollLeft / (ele.scrollWidth - ele.clientWidth)) * 100);
                    }}
                >
                    {props.tvSeriesImages === null
                        ? [...Array(5)].map((_, index) => (
                              <div key={index} className="inline-block w-[24%] mr-[1%] h-[10rem]">
                                  <ImagesShimmer />
                              </div>
                          ))
                        : props.tvSeriesImages.map((image) => (
                              <div className="inline-block md:w-[24%] md:mr-[1%] w-[90%] mr-[5%]" key={image.file_path}>
                                  <img src={useToGetImageSrc(image.file_path)} />
                              </div>
                          ))}
                </div>
                <ScrollBarNavigatorRightButton
                    scrollPercentageVal={scrollPercentage}
                    element={document.querySelector(`#${scrollBarId}`)}
                />
            </div>
        </div>
    );
}
export default TvSeriesImages;
