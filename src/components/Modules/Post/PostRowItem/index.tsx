import dayjs from 'dayjs';
import { Post } from '@/contentlayer/generated/types';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import isEmpty from '@/utils/is-packages/isEmpty';
import { fontSize } from '@/styles/font';
import HyperLink from '@/components/Common/HyperLink';
import Image from '@/components/Common/Image';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';

import 'dayjs/locale/ko';

type PostRowItemProps = Post & {
  href: string;
}

const PostRowItem = ({
  title,
  description,
  thumbnail,
  createdAt,
  category,
  href,
}: PostRowItemProps): JSX.Element => {
  const {
    color,
  } = useStyledTheme();

  return (
    <HyperLink
      external={false}
      display='block'
      link={{
        href,
      }}
      padding='2rem'
      borderRadius='5px'
      backgroundColor={color.background3}
    >
      <Flex
        tagName='div'
        gap='2rem'
        justifyContent='space-between'
      >
        <Flex
          tagName='div'
          gap='1rem'
          flexDirection='column'
          flex='1'
        >
          <Text
            tagName='time'
            dateTime={createdAt}
            wordBreak='keep-all'
            fontSize={fontSize.SMALL}
          >
            {dayjs(createdAt).locale('ko').format('YYYY년 MM월 DD일 (dddd)')}
          </Text>

          <Text
            tagName='h3'
            fontSize={fontSize.MEDIUM}
            maxLine={1}
          >
            {title}
          </Text>

          <Text
            tagName='p'
            fontSize={fontSize.NORMAL}
            minHeight='55px'
            maxLine={2}
            lineHeight='1.6'
          >
            {description}
          </Text>
        </Flex>

        {
          !isEmpty(thumbnail) &&
          <Image
            src={thumbnail}
            alt={title}
            width='120px'
            height='120px'
            borderRadius='5px'
          />
        }
      </Flex>

      <Text
        tagName='span'
        fontSize={fontSize.NORMAL}
        color={color.main}
        display='inline-block'
        margin='1rem 0 0 0'
      >
        {category}
      </Text>
    </HyperLink>
  );
}

export default PostRowItem;