import { DefaultTheme, useTheme } from 'styled-components';

const useStyledTheme = (): DefaultTheme => {
  return useTheme();
}

export default useStyledTheme;