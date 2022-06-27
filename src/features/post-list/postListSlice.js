import { createSlice } from "@reduxjs/toolkit";

const postListSlice = createSlice(
    {
        name: 'post-list',
        initialState: {
            currentChannel: null,
        },
        reducers: {
            setCurrentChannel: (state,action) => {
                state.currentChannel.id = action.payload.id;
                state.currentChannel.name = action.payload.name;
            }
        }
    }
);

export const { setCurrentChannel } = postListSlice.actions;

export default postListSlice.reducer;