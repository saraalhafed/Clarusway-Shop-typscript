import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: localStorage.getItem('darkMode') === 'true' ? true : false,
    //we need to store this state in the localstorge 
  },

  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode.toString());
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;

// uiActions.toggleDarkMode
