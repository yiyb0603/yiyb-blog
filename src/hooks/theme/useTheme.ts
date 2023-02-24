import { useCallback } from 'react';
import { setCookie } from 'cookies-next';
import { SystemTheme } from '@/enums/theme';
import { themeAction } from '@/stores/theme';
import useAppDispatch from '../redux/useAppDispatch';
import useRootSelector from '../redux/useRootSelector';

const useTheme = () => {
  const dispatch = useAppDispatch();

  const {
    theme,
  } = useRootSelector(({ theme }) => theme);

  const setTheme = useCallback((theme: SystemTheme): void => {
    setCookie('theme', theme);

    document.documentElement.setAttribute('data-theme', theme);

    dispatch(themeAction.changeTheme(theme));
  }, [dispatch]);

  const toggleTheme = useCallback((): void => {
    switch (theme) {
      case SystemTheme.LIGHT:
        return void setTheme(SystemTheme.DARK);

      case SystemTheme.DARK:
        return void setTheme(SystemTheme.LIGHT);

      default:
        const systemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (systemDarkTheme) {
          setTheme(SystemTheme.LIGHT);
        } else {
          setTheme(SystemTheme.DARK);
        }
    }
  }, [theme, setTheme]);

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;