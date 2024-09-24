import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from './store';

interface ProductStateInterface {
  loading: boolean;
  error: boolean;
  favorites: Product[];
  productList: Product[];
}

const initialState: ProductStateInterface = {
  loading: false,
  error: false,
  favorites: [],//here we need interface
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    setError: (state) => {
      state.error = true;
      state.loading = false;
    },
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
      state.loading = false;
      state.error = false;
    },
    addFavorite: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      // here we loop on favorites and each item we have in favorites will come one by one
      // while looping we say here item.id !== action.payload
      // we defined favorites as an empty array. And TS will complain item will have id in it or not.
      // to solve this problem, we use interface when we define our initial state
      // yes favorite will be initially an empty array. But it will be an array of Product type. So TS will not complain.
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const getProducts = (search: string) => {
  return async (dispatch: AppDispatch) => {//give a type of dispatch
    dispatch(productSlice.actions.setLoading());
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );

      dispatch(productSlice.actions.setProductList(data.products));
    } catch (error) {
      console.log(error);
      dispatch(productSlice.actions.setError());
    }
  };
};

export const {
  // setLoading,
  // setError,
  // setProductList,
  addFavorite,
  deleteFavorite,
} = productSlice.actions;

export default productSlice.reducer;
