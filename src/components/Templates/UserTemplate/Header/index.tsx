import styled from 'styled-components';
import { images } from '@/assets/images';
import { pageRoute } from '@/libs/models/route';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import HyperLink from '@/components/Common/HyperLink';
import Image from '@/components/Common/Image';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <HeaderWrapper
      tagName='header'
      width='100%'
      height='70px'
      boxShadow='rgb(0 0 0 / 8%) 0px 2.5px 1px'
    >
      <Flex
        tagName='div'
        width='100%'
        maxWidth='1200px'
        height='100%'
        alignItems='center'
        justifyContent='space-between'
        padding='0 2rem'
        margin='0 auto'
      >
        <HyperLink
          external={false}
          link={{
            href: pageRoute.HOME,
          }}
          margin='0.5rem 0 0 0'
        >
          <Image
            src={images.logo.MAIN_TEXT_IMAGE}
            alt='권용빈 블로그'
            width='130px'
          />
        </HyperLink>

        <ToggleTheme />
      </Flex>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled(Section<'header'>)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(15px);
  z-index: 1;
`;

export default Header;