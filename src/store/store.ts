import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "../services/people";

export const setupStore = (preloadedState: object) => {
  return configureStore({
    reducer: {
      [peopleApi.reducerPath]: peopleApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(peopleApi.middleware),
  });
};

export const store = setupStore({});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
