import dayjs from 'dayjs';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';

import 'dayjs/locale/ko';

type PostSubInfoProps = {
  createdAt: string;
  category: string;
}

const PostSubInfo = ({
  createdAt,
  category,
}: PostSubInfoProps): JSX.Element => {
  const {
    fontSize,
  } = useStyledTheme();

  return (
    <Flex
      tagName='div'
      justifyContent='space-between'
    >
      <Text
        tagName='span'
        fontSize={fontSize.NORMAL}
      >
        {category}
      </Text>

      <Text
        tagName='time'
        dateTime={createdAt}
        fontSize={fontSize.NORMAL}
      >
        {dayjs(createdAt).locale('ko').format('YYYY년 MM월 DD일 (dddd)')}
      </Text>
    </Flex>
  );
}

export default PostSubInfo;