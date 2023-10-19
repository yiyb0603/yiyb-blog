import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserState, UserState } from './user.initial';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUserAgent: (state: UserState, action: PayloadAction<string>) => {
      state.userAgent = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userAction } = userSlice;
