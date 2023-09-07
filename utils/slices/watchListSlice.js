import { createSlice } from '@reduxjs/toolkit';

const watchListSlice = createSlice({
    name: 'watchList', // This is used to identify the slice
    initialState: {
        watchListItem: {},
    },
    reducers: {
        addToWatchList: (state, action) => {
            const { id, image, name, toLink, vote_average, vote_count } = action.payload;
            if (!state.watchListItem.hasOwnProperty(id)) {
                state.watchListItem[id] = {
                    name: name,
                    image: image,
                    toLink: toLink,
                    vote_average: vote_average,
                    vote_count: vote_count,
                };
            }
        },
        removeFromWatchList: (state, action) => {
            if (state.watchListItem.hasOwnProperty(action.payload)) {
                delete state.watchListItem[action.payload];
            }
        },
    },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
