import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import nextReducer from "./nextSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";



const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, nextReducer)

export const store = configureStore({
    reducer: { next: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;