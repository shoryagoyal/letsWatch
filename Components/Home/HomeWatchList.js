import { useSelector } from 'react-redux';

import TvMovieCard from '../Helpers/TvMovieCard';
import SectionHeadingWithLink from '../Helpers/SectionHeadingWithLink';

function HomeWatchList() {
    const watchListItem = useSelector((store) => store.watchList.watchListItem);

    return (
        <div>
            <div>
                <SectionHeadingWithLink name="From your WatchList" link="/user/watchList" />
            </div>
            {Object.keys(watchListItem).length === 0 ? (
                <div className="text-white h-[29rem] flex justify-center items-center">
                    <div className="text-xl mb-5">Watch list is empty</div>
                </div>
            ) : (
                <div className="overflow-x-scroll whitespace-nowrap no-scrollbar">
                    {Object.keys(watchListItem).map((item) => (
                        <div className="inline-block w-[15%] mx-[1%]">
                            <TvMovieCard
                                key={item}
                                image={watchListItem[item].image}
                                vote_average={watchListItem[item].vote_average}
                                vote_count={watchListItem[item].vote_count}
                                name={watchListItem[item].name}
                                toLink={watchListItem[item].toLink}
                                id={item}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default HomeWatchList;
