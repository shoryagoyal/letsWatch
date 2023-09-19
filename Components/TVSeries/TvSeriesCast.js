import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { imagePrefixApi } from '../../constants';
import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';

function TvSeriesCast() {
    const { tvSeriesId } = useParams();
    const cast = useFetch(
        `https://api.themoviedb.org/3/tv/${tvSeriesId}/aggregate_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
    );

    return (
        <div>
            <SectionHeadingWithLink link={`/tv/${tvSeriesId}/allCast`} name="Top Cast" />
            <div className="flex flex-wrap justify-between">
                {cast === null ? (
                    <div>The data is loading..</div>
                ) : (
                    cast.cast.slice(0, 18).map((castData) => (
                        <div className="w-[40%] my-2" key={castData.id}>
                            <div className="flex">
                                <div className="mr-2">
                                    <Link to={`/people/${castData.id}`}>
                                        <img
                                            src={
                                                castData.profile_path === null
                                                    ? 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png'
                                                    : `${imagePrefixApi}${castData.profile_path}`
                                            }
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
                    ))
                )}
            </div>
        </div>
    );
}
export default TvSeriesCast;
