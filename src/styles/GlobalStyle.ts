import { createGlobalStyle} from 'styled-components';
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
    font-family: ${({ theme }) => theme.fontFamily.pretendard.REGULAR};
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type=number] {
    -moz-appearance: textfield;
  }

  .utterances {
    max-width: 100% !important;
  }
`;

export default GlobalStyle;