import { useCallback, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { OS_DARK_THEME } from '@/constants/theme';
import { SystemTheme } from '@/enums/theme';
import isEmpty from '@/utils/is-packages/isEmpty';
import { themeAction } from '@/stores/theme';
import useAppDispatch from '../redux/useAppDispatch';
import useRootSelector from '../redux/useRootSelector';
import dayjs from 'dayjs';

const useTheme = () => {
  const dispatch = useAppDispatch();

  const {
    theme,
  } = useRootSelector(({ theme }) => theme);

  const setThemeWithoutCookie = useCallback((theme: SystemTheme): void => {
    document.documentElement.setAttribute('data-theme', theme);
    
    dispatch(themeAction.changeTheme(theme));
  }, [dispatch]);

  const setTheme = useCallback((theme: SystemTheme): void => {
    const nonExpireDate = dayjs().add(1000, 'years').toDate();    

    setCookie('theme', theme, {
      expires: nonExpireDate,
    });

    setThemeWithoutCookie(theme);
  }, [setThemeWithoutCookie]);

  const toggleTheme = (): void => {
    switch (theme) {
      case SystemTheme.LIGHT:
        return void setTheme(SystemTheme.DARK);

      case SystemTheme.DARK:
        return void setTheme(SystemTheme.LIGHT);

      default:
        return;
    }
  }

  const systemThemeListener = useCallback((e: MediaQueryListEvent): void => {
    const cookieTheme = getCookie('theme');

    if (!isEmpty(cookieTheme)) {
      return;
    }

    if (e.matches) {
      setThemeWithoutCookie(SystemTheme.DARK);
    } else {
      setThemeWithoutCookie(SystemTheme.LIGHT);
    }
  }, [setThemeWithoutCookie]);

  const initializeTheme = useCallback((): void => {
    const cookieTheme = getCookie('theme');

    if (isEmpty(cookieTheme)) {
      const systemDarkTheme = window.matchMedia(OS_DARK_THEME).matches;

      if (systemDarkTheme) {
        setThemeWithoutCookie(SystemTheme.DARK);
      } else {
        setThemeWithoutCookie(SystemTheme.LIGHT);
      }
    } else {
      setTheme(cookieTheme as SystemTheme);
    }
  }, [setTheme, setThemeWithoutCookie]);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const matchMedia = window.matchMedia(OS_DARK_THEME);

    matchMedia.addEventListener('change', systemThemeListener);

    return () => {
      matchMedia.removeEventListener('change', systemThemeListener);
    };
  }, [systemThemeListener]);

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
