import { images } from '@/assets/images';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import Image from '@/components/Common/Image';

const NoPosts = (): JSX.Element => {
  const {
    fontSize,
    fontFamily,
  } = useStyledTheme();

  return (
    <Section
      tagName='div'
    >
      <Image
        src={images.EMPTY_BOARD}
        alt='글이 존재하지 않습니다.'
        width='100%'
        maxHeight='200px'
        margin='2rem 0'
      />

      <Text
        tagName='p'
        fontSize={fontSize.MEDIUM}
        fontFamily={fontFamily.pretendard.MEDIUM}
        textAlign='center'
      >
        글이 존재하지 않아요!
      </Text>
    </Section>
  );
}

export default NoPosts;