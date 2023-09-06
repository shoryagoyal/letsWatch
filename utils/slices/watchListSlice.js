import { createSlice } from '@reduxjs/toolkit';

const watchListSlice = createSlice({
    name: 'watchList', // This is used to identify the slice
    initialState: {
        itemsId: [],
    },
    reducers: {
        addToWatchList: (state, action) => {
            if (state.itemsId.indexOf(action.payload) == -1) {
                state.itemsId.push(action.payload);
            }
        },
        removeFromWatchList: (state, action) => {
            const index = state.itemsId.indexOf(action.payload);
            if (index != -1) {
                state.itemsId.splice(index, 1);
            }
        },
    },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
