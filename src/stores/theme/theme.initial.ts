import { SystemTheme } from '@/enums/theme';

export type ThemeState = {
  theme: SystemTheme;
};

export const initialThemeState: ThemeState = {
  theme: SystemTheme.DEFAULT,
};
