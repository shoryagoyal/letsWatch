import { useSelector } from 'react-redux';

function useCheckWhetherItemPresentInWatchList(id) {
    const watchListItem = useSelector((state) => state.watchList.watchListItem);
    return !watchListItem.hasOwnProperty(id);
}

export default useCheckWhetherItemPresentInWatchList;
