import { RefObject } from 'react';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Text from '@/components/Common/Text';

type PostTitleProps = {
  title: string;
  titleRef: RefObject<HTMLHeadingElement>;
}

const PostTitle = ({
  title,
  titleRef,
}: PostTitleProps): JSX.Element => {
  const {
    fontSize,
  } = useStyledTheme();

  return (
    <Text
      tagName='h1'
      fontSize={fontSize.EXTRA_LARGE}
      letterSpacing='-0.8px'
      textRef={titleRef}
    >
      {title}
    </Text>
  );
}

export default PostTitle;