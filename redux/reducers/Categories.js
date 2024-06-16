import {createSlice} from '@reduxjs/toolkit';
const initialSate = {
  categories: [
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryId: 5,
      name: 'Houdehold goods',
    },
    {
      categoryId: 6,
      name: 'Pets goods',
    },
    {
      categoryId: 7,
      name: 'Children goods',
    },
    {
      categoryId: 8,
      name: 'Travel goods',
    },
    {
      categoryId: 9,
      name: 'Sport goods',
    },
    {
      categoryId: 10,
      name: 'Office goods',
    },
  ],
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialSate,
  reducers: {
    resetCategories: () => {
      return initialSate;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;
