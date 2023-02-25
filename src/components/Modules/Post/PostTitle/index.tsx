import Text from '@/components/Common/Text';
import useStyledTheme from '@/hooks/theme/useStyledTheme';

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
    >
      {title}
    </Text>
  );
}

export default PostTitle;