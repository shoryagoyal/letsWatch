import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import CastShimmer from '../Shimmers/CastShimmer';
import ScrollBarNavigatorLeftButton from '../Helpers/ScrollBarNavigatorLeftButton';
import ScrollBarNavigatorRightButton from '../Helpers/ScrollBarNavigatorRightButton';
import useGetUniqueIdForScrollbar from '../../hooks/useGetUniqueIdForScrollbar';

function TvSeriesCast(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const scrollBarId = useGetUniqueIdForScrollbar();
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
    }, []);

    if (windowWidth < 768) {
        return (
            <div>
                <SectionHeadingWithLink link={`/tv/${props.id}/allCast`} name="Top Cast" />
                <div className="flex">
                    <ScrollBarNavigatorLeftButton
                        scrollPercentageVal={scrollPercentage}
                        element={document.querySelector(`#${scrollBarId}`)}
                    />
                    <div
                        className="overflow-x-scroll whitespace-nowrap no-scrollbar w-[100%] mx-[-4%]"
                        id={scrollBarId}
                        onScroll={() => {
                            const ele = document.querySelector(`#${scrollBarId}`);
                            setScrollPercentage((ele.scrollLeft / (ele.scrollWidth - ele.clientWidth)) * 100);
                        }}
                    >
                        {props.tvSeriesCasts === null
                            ? Array(10)
                                  .fill('')
                                  .map(() => (
                                      <div className="inline-block mr-[3%] w-[40%]">
                                          <CastShimmer />
                                      </div>
                                  ))
                            : props.tvSeriesCasts.map((castData) => (
                                  <div className="inline-block w-[40%] mr-[3%]" key={castData.id}>
                                      <div className="inline-block w-[100%] mb-2 whitespace-normal">
                                          <div className="w-[100%] flex justify-center items-center mb-2">
                                              <Link to={`/people/${castData.id}`}>
                                                  <img
                                                      src={useToGetImageSrc(castData.profile_path)}
                                                      className="h-36 w-36 rounded-full"
                                                      alt={`image of ${castData.name}`}
                                                  />
                                              </Link>
                                          </div>
                                          <div className="flex justify-center items-center md:block">
                                              <div>
                                                  <Link to={`/people/${castData.id}`}>
                                                      <div className="font-bold text-white">{castData.name}</div>
                                                  </Link>
                                                  <div className="text-slate-400 md:h-30">
                                                      <div>{castData.roles[0].character}</div>
                                                      <div>
                                                          {castData.roles[0].episode_count}{' '}
                                                          {castData.roles[0].episode_count > 1 ? 'episodes' : 'episode'}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
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
    return (
        <div>
            <SectionHeadingWithLink link={`/tv/${props.id}/allCast`} name="Top Cast" />
            <div className="flex flex-wrap justify-between">
                {props.tvSeriesCasts === null
                    ? Array(10)
                          .fill('')
                          .map(() => (
                              <div className="flex w-[40%]">
                                  <CastShimmer />
                              </div>
                          ))
                    : props.tvSeriesCasts.map((castData) => (
                          <div className="w-[49%] mr-[1%] h-30 my-2" key={castData.id}>
                              <div className="flex w-[100%] mb-2 whitespace-normal">
                                  <div className="flex justify-center items-center w-[30%] mr-[2%] lg:w-[20%] ">
                                      <Link to={`/people/${castData.id}`}>
                                          <img
                                              src={useToGetImageSrc(castData.profile_path)}
                                              className="w-24 h-24 rounded-full hover:brightness-[80%]"
                                              alt={`image of ${castData.name}`}
                                          />
                                      </Link>
                                  </div>
                                  <div className="w-[65%]">
                                      <Link to={`/people/${castData.id}`}>
                                          <div className="font-bold text-white hover:underline h-10 pt-2">
                                              {castData.name}
                                          </div>
                                      </Link>
                                      <div className="text-slate-400 h-30">
                                          <div>{castData.roles[0].character}</div>
                                          <div>
                                              {castData.roles[0].episode_count}{' '}
                                              {castData.roles[0].episode_count > 1 ? 'episodes' : 'episode'}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
}
export default TvSeriesCast;
