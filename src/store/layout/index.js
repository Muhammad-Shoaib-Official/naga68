import { createSlice } from "@reduxjs/toolkit";

const layout = createSlice({
    name: "layout",
    initialState: {
        isShowLeftSideBar: false,
        isShowRightSideBar: false,
    },
    reducers: {
        toggleSidebar: (state, { payload }) => {
            switch (payload) {
                case "isShowLeftSideBar":
                    state.isShowLeftSideBar = !state.isShowLeftSideBar;
                    return;
                case "isShowRightSideBar":
                    state.isShowRightSideBar = !state.isShowRightSideBar;
                    return;
                default:
                    return;
            }
        }
    }
})
export const { toggleSidebar } = layout.actions
export default layout.reducer