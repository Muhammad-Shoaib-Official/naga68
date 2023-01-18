import { configureStore } from "@reduxjs/toolkit";
import signInSlice from './sign-in'
const store = configureStore({
    reducer: {
        signIn: signInSlice,
    }
})

export default store