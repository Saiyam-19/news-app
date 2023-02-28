import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../reducers/newsReducer';
import favoritesReducer from '../reducers/favoritesReducer';
import filtersReducer from '../reducers/filtersReducer';

const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer
  }
});

export default store;
