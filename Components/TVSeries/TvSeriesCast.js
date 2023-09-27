import { Link } from 'react-router-dom';

import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';
import useToGetImageSrc from '../../hooks/useToGetImageSrc';
import CastShimmer from '../Shimmers/CastShimmer';

function TvSeriesCast(props) {
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
                    : // <div>The data is loading..</div>
                      props.tvSeriesCasts.map((castData) => (
                          <div className="w-[40%] my-2" key={castData.id}>
                              <div className="flex">
                                  <div className="mr-2">
                                      <Link to={`/people/${castData.id}`}>
                                          <img
                                              src={useToGetImageSrc(castData.profile_path)}
                                              className=" h-24 w-24 rounded-full hover:brightness-[60%]"
                                              alt={`image of ${castData.name}`}
                                          />
                                      </Link>
                                  </div>
                                  <div>
                                      <Link to={`/people/${castData.id}`}>
                                          <div className="font-bold text-white hover:underline">{castData.name}</div>
                                      </Link>
                                      <div className="text-slate-400">
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
