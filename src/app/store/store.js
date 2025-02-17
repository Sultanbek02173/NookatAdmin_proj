import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/count";
import { galleryReducer } from "./reducers/gallerySlice";
import { viewCardReducer } from "./reducers/viewSlice"; 
import { newsReducer } from "./reducers/newsSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    gallery: galleryReducer,
    card: viewCardReducer, 
    news: newsReducer,
  },
});
