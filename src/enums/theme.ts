export const SystemTheme = {
  LIGHT: 'light',
  DARK: 'dark',
  DEFAULT: 'default',
} as const;

export type SystemTheme = typeof SystemTheme[keyof typeof SystemTheme];