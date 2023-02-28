import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    category: ''
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const { setCategory } = filtersSlice.actions;

export default filtersSlice.reducer;
