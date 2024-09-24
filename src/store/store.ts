import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    products: productSlice,
  },
});

// when we use redux with javascript we were using this method
// typescript is all about types
// now when we useSelector typescript will complain about state type
// we need to define a type for our state
// and there is a generic way to collect the type of our state and we will use below code for that purpose

export type RootStateType = ReturnType<typeof store.getState>;

// this part is needed when we use useDispatch
export type AppDispatch = typeof store.dispatch;
