import { createSlice } from '@reduxjs/toolkit';

const starRatingModalShownSlice = createSlice({
    name: 'starRatingModal', // This is used to identify the slice
    initialState: {
        starRatingModalVisible: false,
        id: -1,
        name: '',
    },
    reducers: {
        hideStarRatingModal: (state, action) => {
            state.starRatingModalVisible = false;
        },
        showStarRatingModal: (state, action) => {
            const { id, name } = action.payload;
            state.id = id;
            state.name = name;
            state.starRatingModalVisible = true;
        },
    },
});

export const { hideStarRatingModal, showStarRatingModal } = starRatingModalShownSlice.actions;

export default starRatingModalShownSlice.reducer;
