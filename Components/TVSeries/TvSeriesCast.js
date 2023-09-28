import { Link } from 'react-router-dom';

import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import CastShimmer from '../Shimmers/CastShimmer';

function TvSeriesCast(props) {
    return (
        <div>
            <SectionHeadingWithLink link={`/tv/${props.id}/allCast`} name="Top Cast" />
            <div className="overflow-x-scroll whitespace-nowrap no-scrollbar md:flex md:flex-wrap md:justify-between">
                {props.tvSeriesCasts === null
                    ? Array(10)
                          .fill('')
                          .map(() => (
                              <div className="flex w-[40%]">
                                  <CastShimmer />
                              </div>
                          ))
                    : props.tvSeriesCasts.map((castData) => (
                          <div
                              className="inline-block w-[40%] mr-[3%] md:w-[49%] md:mr-[1%] md:h-30 md:my-2"
                              key={castData.id}
                          >
                              <div className="inline-block md:flex w-[100%] mb-2 whitespace-normal">
                                  <div className="w-[100%] flex justify-center items-center md:w-[30%] md:mr-[2%] md:mb-0 lg:w-[20%] mb-2 md:mb-0">
                                      <Link to={`/people/${castData.id}`}>
                                          <img
                                              src={useToGetImageSrc(castData.profile_path)}
                                              className="h-36 w-36 md:w-24 md:h-24 rounded-full hover:brightness-[60%]"
                                              alt={`image of ${castData.name}`}
                                          />
                                      </Link>
                                  </div>
                                  <div className="md:w-[65%] flex justify-center items-center md:block">
                                      <div>
                                          <Link to={`/people/${castData.id}`}>
                                              <div className="font-bold text-white md:hover:underline md:h-10 md:pt-2">
                                                  {castData.name}
                                              </div>
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
        </div>
    );
}
export default TvSeriesCast;
