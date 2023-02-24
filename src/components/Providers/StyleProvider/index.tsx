import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { SystemTheme } from '@/enums/theme';
import useTheme from '@/hooks/theme/useTheme';
import {
  lightThemePalette,
  darkThemePalette,
} from '@/styles/theme';
import { device } from '@/styles/device';
import { media } from '@/styles/media';

type StyleProviderProps = {
  children: ReactNode;
}

const StyleProvider = ({
  children,
}: StyleProviderProps): JSX.Element => {
  const { theme } = useTheme();

  return (
    <ThemeProvider
      theme={{
        color: theme === SystemTheme.LIGHT ? lightThemePalette : darkThemePalette,
        device,
        media,
      }}
    >
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;