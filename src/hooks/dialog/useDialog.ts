import { ReactNode, useCallback } from 'react';
import { dialogAction } from '@/stores/dialog';
import useAppDispatch from '../redux/useAppDispatch';
import useRootSelector from '../redux/useRootSelector';

type DialogParams = {
  title: string;
  content: ReactNode;
};

const useDialog = () => {
  const dispatch = useAppDispatch();

  const { isDialog, dialogType, title, content, onResolve, onReject } =
    useRootSelector(({ dialog }) => dialog);

  const clearDialog = useCallback((): void => {
    dispatch(dialogAction.clearDialogInfo());
  }, [dispatch]);

  const showAlert = useCallback(
    ({ title, content }: DialogParams): void => {
      dispatch(
        dialogAction.setDialogInfo({
          isDialog: true,
          dialogType: 'alert',
          title,
          content,
          onResolve: () => {
            clearDialog();
          },
          onReject: () => {
            clearDialog();
          },
        }),
      );
    },
    [clearDialog, dispatch],
  );

  const showConfirm = useCallback(
    ({ title, content }: DialogParams): Promise<boolean> => {
      return new Promise((resolve) => {
        dispatch(
          dialogAction.setDialogInfo({
            isDialog: true,
            dialogType: 'confirm',
            title,
            content,
            onResolve: () => {
              clearDialog();

              resolve(true);
            },
            onReject: () => {
              clearDialog();

              resolve(false);
            },
          }),
        );
      });
    },
    [clearDialog, dispatch],
  );

  return {
    isDialog,
    dialogType,
    title,
    content,
    onResolve,
    onReject,
    showAlert,
    showConfirm,
  };
};

export default useDialog;
