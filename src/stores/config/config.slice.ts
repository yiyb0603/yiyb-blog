import { createSlice } from '@reduxjs/toolkit';
import { initialConfigState } from './config.initial';

const configSlice = createSlice({
  name: 'config',
  initialState: initialConfigState,
  reducers: {},
});

export const {
  reducer: configReducer,
} = configSlice;