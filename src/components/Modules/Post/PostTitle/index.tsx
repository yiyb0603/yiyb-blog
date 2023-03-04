import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Text from '@/components/Common/Text';

type PostTitleProps = {
  title: string;
}

const PostTitle = ({
  title,
}: PostTitleProps): JSX.Element => {
  const {
    fontSize,
  } = useStyledTheme();

  return (
    <Text
      tagName='h1'
      fontSize={fontSize.EXTRA_LARGE}
      letterSpacing='-0.8px'
    >
      {title}
    </Text>
  );
}

export default PostTitle;