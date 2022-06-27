import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import postListReducer from "../features/post-list/postListSlice";

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        postList: postListReducer,
    }
});