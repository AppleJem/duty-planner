import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import tableSlice from "./tableSlice";

const store = configureStore({
    reducer: {
        activeName: nameSlice.reducer,
        tableSpecs:tableSlice.reducer
    }
})

export default store;