import { createGlobalStyle } from 'styled-components';
import { disableDrag } from '@/styles/utils';
import reset from './reset';
import {
  lightThemeScheme,
  lightThemeVariables,
  darkThemeScheme,
  darkThemeVariables,
} from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html,
  body,
  #_next {
    width: 100%;
    min-height: 100vh;
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fontFamily.pretendard.REGULAR};
    letter-spacing: -0.2px;
  }

  @media (prefers-color-scheme: light) {
    html {
      ${lightThemeVariables};
      color: ${lightThemeScheme.contrast};
      background-color: ${lightThemeScheme.theme};
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      ${darkThemeVariables};
      color: ${darkThemeScheme.contrast};
      background-color: ${darkThemeScheme.theme};
    }
  }

  html[data-theme='light'] {
    ${lightThemeVariables};
    color: ${lightThemeScheme.contrast};
    background-color: ${lightThemeScheme.theme};
  }

  html[data-theme='dark'] {
    ${darkThemeVariables};
    color: ${darkThemeScheme.contrast};
    background-color: ${darkThemeScheme.theme};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    ${disableDrag};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
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
