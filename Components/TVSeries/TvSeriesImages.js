import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import ImagesShimmer from '../Shimmers/ImagesShimmer';

function TvSeriesImages(props) {
    return (
        <div>
            <SectionHeadingWithLink link={`/tv/${props.id}/allImages`} name="Photos" />
            <div className="overflow-x-scroll whitespace-nowrap no-scrollbar">
                {props.tvSeriesImages === null
                    ? [...Array(5)].map((_, index) => (
                          <div key={index} className="inline-block w-[24%] mr-[1%] h-[10rem]">
                              <ImagesShimmer />
                          </div>
                      ))
                    : props.tvSeriesImages.map((image) => (
                          <div className="inline-block w-[24%] mr-[1%]" key={image.file_path}>
                              <img src={useToGetImageSrc(image.file_path)} />
                          </div>
                      ))}
            </div>
        </div>
    );
}
export default TvSeriesImages;
