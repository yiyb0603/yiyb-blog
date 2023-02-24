import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import Image from '@/components/Common/Image';
import { images } from '@/assets/images';

const Header = () => {
  const { color } = useStyledTheme();

  return (
    <Section
      tagName='header'
      maxWidth='768px'
      height='70px'
      margin='0 auto'
    >
      <Flex
        tagName='div'
        width='100%'
        height='100%'
        alignItems='center'
        padding='0 2rem'
        border={{
          bottom: `1px solid ${color.border3}`,
        }}
      >
        <Image
          src={images.logo.MAIN_TEXT_IMAGE}
          alt='권용빈 블로그'
          width='160px'
        />
      </Flex>
    </Section>
  )
}

export default Header;