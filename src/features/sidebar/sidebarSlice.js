import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getChannels } from '../../api/channelApi'

export const fetchChannels = createAsyncThunk(
    'sidebar/fetchChannels',
    async () => {
        const response = await getChannels();
        return response;
    }
)

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
        channels: [],
    },
    reducers: {
        toggleSidebar: state => {
            state.isOpen = !(state.isOpen);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChannels.fulfilled, (state, action) => {
            state.channels = action.payload;
        })
    }
})



export const { toggleSidebar, channelsSuccess } = sidebarSlice.actions

export default sidebarSlice.reducer