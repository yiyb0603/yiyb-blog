import { createGlobalStyle} from 'styled-components';
import { fonts } from '@/assets/fonts';
import reset from './reset';
import {
  lightTheme,
  lightThemeVariables,
  darkTheme,
  darkThemeVariables,
} from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.pretendard.REGULAR};
  }

  html,
  body,
  #_next {
    width: 100%;
    min-height: 100vh;
    font-size: 62.5%;
  }

  @media (prefers-color-scheme: light) {
    html {
      ${lightThemeVariables};
      color: ${lightTheme.contrast};
      background-color: ${lightTheme.theme};
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      ${darkThemeVariables};
      color: ${darkTheme.contrast};
      background-color: ${darkTheme.theme};
    }
  }

  html[data-theme='light'] {
    ${lightThemeVariables};
    color: ${lightTheme.contrast};
    background-color: ${lightTheme.theme};
  }

  html[data-theme='dark'] {
    ${darkThemeVariables};
    color: ${darkTheme.contrast};
    background-color: ${darkTheme.theme};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;