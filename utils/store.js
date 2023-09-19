import { configureStore } from '@reduxjs/toolkit';

import watchListSlice from './slices/watchListSlice';
import starRatingModalShownSlice from './slices/starRatingModalShown';

const store = configureStore({
    reducer: {
        watchList: watchListSlice,
        starRatingModalShown: starRatingModalShownSlice,
    },
});

export default store;
