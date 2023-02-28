import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      country: 'us',
      apiKey: '4a71c311754e47e58f46cddf222c9ebe'
    }
  });
  return response.data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default newsSlice.reducer;
