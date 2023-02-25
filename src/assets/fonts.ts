import generateStaticPath from '@/utils/cdn/generateStaticPath';

export const fontPaths = {
  pretendard: {
    BOLD: generateStaticPath('/fonts/pretendard/pretendard-bold.woff2'),
    SEMI_BOLD: generateStaticPath('/fonts/pretendard/pretendard-semi-bold.woff2'),
    MEDIUM: generateStaticPath('/fonts/pretendard/pretendard-medium.woff2'),
    REGULAR: generateStaticPath('/fonts/pretendard/pretendard-regular.woff2'),
  },
};

export const fonts = {
  pretendard: {
    BOLD: 'Pretendard-Bold',
    SEMI_BOLD: 'Pretendard-SemiBold',
    MEDIUM: 'Pretendard-Medium',
    REGULAR: 'Pretendard-Regular',
  },
};