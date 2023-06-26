import generateStaticPath from '@/utils/cdn/generateStaticPath';

export const images = {
  logo: {
    MAIN_TEXT_IMAGE: generateStaticPath('/images/logo/main_text_logo.webp'),
  },

  opengraph: {
    BASE: generateStaticPath('/images/opengraph/base_opengraph.png'),
  },

  EMPTY_BOARD: generateStaticPath('/images/empty_board.svg'),
};