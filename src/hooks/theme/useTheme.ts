import { useCallback, useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { OS_DARK_THEME } from '@/constants/theme';
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

  const detectSystemTheme = useCallback((): void => {
    const systemDarkTheme = window.matchMedia(OS_DARK_THEME).matches;

    if (systemDarkTheme) {
      setTheme(SystemTheme.DARK);
    } else {
      setTheme(SystemTheme.LIGHT);
    }
  }, [setTheme]);

  const toggleTheme = (): void => {
    switch (theme) {
      case SystemTheme.LIGHT:
        return void setTheme(SystemTheme.DARK);

      case SystemTheme.DARK:
        return void setTheme(SystemTheme.LIGHT);

      default:
        detectSystemTheme();
    }
  }

  useEffect(() => {
    if (theme === 'default') {
      detectSystemTheme();
    }
  }, [theme, detectSystemTheme]);

  useEffect(() => {
    if (theme === 'default') {
      window.matchMedia(OS_DARK_THEME).addEventListener('change', detectSystemTheme);
    } else {
      window.matchMedia(OS_DARK_THEME).removeEventListener('change', detectSystemTheme);
    }

    return () => {
      window.matchMedia(OS_DARK_THEME).removeEventListener('change', detectSystemTheme);
    };
  }, [detectSystemTheme, theme]);

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;