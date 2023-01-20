import { configureStore } from "@reduxjs/toolkit";
import signInSlice from './sign-in'
import layoutSllice from './layout'
const store = configureStore({
    reducer: {
        signIn: signInSlice,
        layout: layoutSllice,
    }
})

export default store