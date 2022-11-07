import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import tableSlice from "./tableSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer: {
        namesConfig: nameSlice.reducer,
        tableSpecs:tableSlice.reducer,
        menuStatus: menuSlice.reducer,
    }
})

export default store;