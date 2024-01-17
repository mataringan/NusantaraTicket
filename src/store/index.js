import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "./user-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { destinationSlice } from "./destination-slice";

const persistConfig = {
    key: "root",
    storage,
};

const userPersistedReducer = persistReducer(persistConfig, userSlice.reducer);
const destinationPersistedReducer = persistReducer(persistConfig, destinationSlice.reducer);

const store = configureStore({
    reducer: {
        user: userPersistedReducer,
        destination: destinationPersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };
