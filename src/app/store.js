import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice.js";
import contactSlice from "../features/contactSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        contact: contactSlice,
    },
});

export default store;