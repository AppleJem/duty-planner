import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import tableSlice from "./tableSlice";
import menuSlice from "./menuSlice";
import backupSlice from "./backupSlice";
import autofillSlice from "./autofillSlice";

const store = configureStore({
    reducer: {
        namesConfig: nameSlice.reducer,
        tableSpecs:tableSlice.reducer,
        menuStatus: menuSlice.reducer,
        backupInfo: backupSlice.reducer,
        autofillInfo: autofillSlice.reducer,
    }
})

export default store;