import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SystemTheme } from '@/enums/theme';
import { initialThemeState, ThemeState } from './theme.initial';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    changeTheme: (state: ThemeState, action: PayloadAction<SystemTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  reducer: themeReducer,
  actions: themeAction,
} = themeSlice;