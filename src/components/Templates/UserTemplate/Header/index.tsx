import styled from 'styled-components';
import { images } from '@/assets/images';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { pageRoute } from '@/libs/models/route';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import HyperLink from '@/components/Common/HyperLink';
import Image from '@/components/Common/Image';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  const { color } = useStyledTheme();

  return (
    <HeaderWrapper
      tagName='header'
      width='100%'
      height='70px'
      border={{
        bottom: `1px solid ${color.border3}`,
      }}
    >
      <Flex
        tagName='div'
        width='100%'
        maxWidth='768px'
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
        >
          <Image
            src={images.logo.MAIN_TEXT_IMAGE}
            alt='권용빈 블로그'
            width='160px'
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
  background-color: ${({ theme }) => theme.color.theme};
`;

export default Header;