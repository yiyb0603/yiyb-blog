import { fontPaths, fonts } from '@/assets/fonts';

export const fontSize = {
  TINY: '1.2rem',
  LITTLE: '1.3rem',
  SMALL: '1.4rem',
  NORMAL: '1.6rem',
  MEDIUM: '1.8rem',
  BIG: '2.2rem',
  EXTRA_BIG: '2.4rem',
  LARGE: '3rem',
  EXTRA_LARGE: '4rem',
} as const;

export const fontFamilies = `
  @font-face {
    src: url(${fontPaths.pretendard.REGULAR}) format('woff2');
    font-family: ${fonts.pretendard.REGULAR};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.MEDIUM}) format('woff2');
    font-family: ${fonts.pretendard.MEDIUM};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.BOLD}) format('woff2');
    font-family: ${fonts.pretendard.BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.SEMI_BOLD}) format('woff2');
    font-family: ${fonts.pretendard.SEMI_BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`;
