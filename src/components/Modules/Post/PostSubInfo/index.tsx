import dayjs from 'dayjs';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { pageRoute } from '@/libs/models/route';
import HyperLink from '@/components/Common/HyperLink';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';

import 'dayjs/locale/ko';

type PostSubInfoProps = {
  createdAt: string;
  category: string;
};

const PostSubInfo = ({
  createdAt,
  category,
}: PostSubInfoProps): JSX.Element => {
  const { color, fontFamily, fontSize } = useStyledTheme();

  return (
    <Flex
      tagName='section'
      justifyContent='space-between'
      alignItems='center'
    >
      <HyperLink
        external={false}
        link={{
          href: {
            pathname: pageRoute.HOME,
            query: {
              category,
            },
          },
        }}
        fontSize={fontSize.MEDIUM}
        fontFamily={fontFamily.pretendard.MEDIUM}
        color={color.main}
      >
        {category}
      </HyperLink>

      <Text
        tagName='time'
        dateTime={createdAt}
        fontSize={fontSize.NORMAL}
        letterSpacing='-0.4px'
      >
        {dayjs(createdAt).locale('ko').format('YYYY년 MM월 DD일 (dddd)')}
      </Text>
    </Flex>
  );
};

export default PostSubInfo;
