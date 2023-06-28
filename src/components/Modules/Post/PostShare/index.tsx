import { useRouter } from 'next/router';
import styled from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import useDialog from '@/hooks/dialog/useDialog';
import copyToClipboard from '@/utils/feature/copyToClipboard';
import generateFullURL from '@/utils/string/generateFullURL';
import Button from '@/components/Common/Button';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import ClipIcon from '@/components/Common/Icon/ClipIcon';

const PostShare = (): JSX.Element => {
  const { asPath } = useRouter();

  const {
    color,
    fontSize,
    fontFamily,
  } = useStyledTheme();

  const {
    showAlert,
  } = useDialog();

  const handleShare = () => {
    copyToClipboard(generateFullURL(asPath));

    showAlert({
      title: '게시글 공유',
      content: '링크가 클립보드에 복사되었습니다.',
    });
  }

  return (
    <PostShareWrapper
      tagName='section'
      margin='2rem 0 0 0'
    >
      <Button
        width='100%'
        height='46px'
        gap='1rem'
        backgroundColor={color.main}
        onClick={handleShare}
      >
        <ClipIcon
          color={color.white}
          fontSize={fontSize.MEDIUM}
        />

        <Text
          tagName='p'
          fontSize={fontSize.NORMAL}
          color={color.white}
        >
          게시글 공유하기
        </Text>
      </Button>
    </PostShareWrapper>
  );
}

const PostShareWrapper = styled(Section<'section'>)`
  position: sticky;
  bottom: 3rem;
`;

export default PostShare;