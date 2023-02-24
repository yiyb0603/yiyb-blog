import 'styled-components';
import { CustomTheme } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}