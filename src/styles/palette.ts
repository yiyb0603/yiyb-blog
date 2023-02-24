import camelToKebab from '@/utils/string/camelToKebab';

export const generateCSSVariablePalette = <T extends Record<string, string>>(
  themePalette: T,
): Record<string, string> => {
  return Object.entries(themePalette).reduce((prev, [key, value]) => {
    prev[`--${camelToKebab(key)}`] = value;
    return prev;
  }, {} as Record<string, string>);
}

export const generateVariablePalette = <T extends Record<string, string>>(
  themePalette: T,
): Record<keyof T, string> => {
  return Object.keys(themePalette).reduce((prev, key) => {
    prev[key as keyof T] = `var(--${camelToKebab(key)})`;
    return prev;
  }, {} as Record<keyof T, string>);
}

export const palette = {
  red50: '#ffebee',
  red100: '#ffcdd2',
  red200: '#ef9a9a',
  red300: '#e57373',
  red400: '#ef5350',
  red500: '#f42434',
  red600: '#e53935',
  red700: '#d32f2f',
  red800: '#c62828',
  red900: '#b71c1c',

  blue50: '#e3f2fd',
  blue100: '#bbdefb',
  blue200: '#90caf9',
  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#2196f3',
  blue600: '#1e88e5',
  blue700: '#1976d2',
  blue800: '#0064ff',
  blue900: '#0d47a1',

  lightBlue50: '#f4f7ff',
  lightBlue100: '#b3e5fc',
  lightBlue200: '#81d4fa',
  lightBlue300: '#4fc3f7',
  lightBlue400: '#0070c0',
  lightBlue500: '#1686d8',
  lightBlue600: '#039be5',
  lightBlue700: '#0288d1',
  lightBlue800: '#0277bd',
  lightBlue900: '#01579b',

  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fff176',
  yellow400: '#ffee58',
  yellow500: '#fee500',
  yellow600: '#fdd835',
  yellow700: '#fbc02d',
  yellow800: '#f9a825',
  yellow900: '#f57f17',

  orange50: '#fff3e0',
  orange100: '#ffe0b2',
  orange200: '#ffcc80',
  orange300: '#ffb74d',
  orange400: '#ffa726',
  orange500: '#ff9800',
  orange600: '#fb8c00',
  orange700: '#f57c00',
  orange800: '#ef6c00',
  orange900: '#e65100',

  white: '#f2f2f2',
  black: '#1f2e3d',
};

export const cssPalette = generateVariablePalette(palette);