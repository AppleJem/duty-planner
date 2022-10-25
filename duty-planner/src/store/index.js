import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";

const store = configureStore({
    reducer: {
        activeName: nameSlice.reducer
    }
})

export default store;