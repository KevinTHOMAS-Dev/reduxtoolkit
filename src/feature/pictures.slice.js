import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
    name: "pictures",
    initialState:{
        pictures: null,
    },
    reducers:{
        setPicturesData: (state, action) => {
            state.pictures = action.payload;
        },
        addPictures: (state, action) => {
            state.pictures.push(action.payload);
        },
        editPictures: (state, { payload }) => {
            state.pictures = state.pictures.map((pic) => {
                if (pic.id === payload[1]) {
                    return {
                        ...pic,
                        artist: payload[0],
                    };
                } else return pic;
            });
        },
        deletePictures: (state, { payload }) => {
            state.pictures = state.pictures.filter((pic) => pic.id !== payload)
        }
    },
});

export const { setPicturesData, addPictures, editPictures, deletePictures } = picturesSlice.actions;
export default picturesSlice.reducer;