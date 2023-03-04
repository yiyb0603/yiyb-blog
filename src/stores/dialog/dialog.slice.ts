import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogState, initialDialogState } from './dialog.initial';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: initialDialogState,
  reducers: {
    setIsDialog: (state: DialogState, action: PayloadAction<boolean>) => {
      state.isDialog = action.payload;
    },

    setDialogInfo: (state: DialogState, action: PayloadAction<DialogState>) => {
      const {
        isDialog,
        dialogType,
        title,
        content,
        onResolve,
        onReject,
      } = action.payload;

      state.isDialog = isDialog;
      state.dialogType = dialogType;
      state.title = title;
      state.content = content;
      state.onResolve = onResolve;
      state.onReject = onReject;
    },

    clearDialogInfo: (state: DialogState) => {
      const {
        isDialog,
        dialogType,
        title,
        content,
        onResolve,
        onReject,
      } = initialDialogState;

      state.isDialog = isDialog;
      state.dialogType = dialogType;
      state.title = title;
      state.content = content;
      state.onResolve = onResolve;
      state.onReject = onReject;
    },
  },
});

export const {
  reducer: dialogReducer,
  actions: dialogAction,
} = dialogSlice;