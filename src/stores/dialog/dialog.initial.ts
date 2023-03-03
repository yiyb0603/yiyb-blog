import { ReactNode } from 'react';

export type DialogType = 'alert' | 'confirm';

export type DialogState = {
  isDialog: boolean;
  dialogType: DialogType | null;
  title: string;
  content: ReactNode;
  onResolve: () => void;
  onReject: () => void;
}

export const initialDialogState: DialogState = {
  isDialog: false,
  dialogType: null,
  title: '',
  content: '',
  onResolve: () => {},
  onReject: () => {},
};