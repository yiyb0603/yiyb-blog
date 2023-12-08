import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import { Post } from '@/contentlayer/generated/types';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import isEmpty from '@/utils/is-packages/isEmpty';
import HyperLink from '@/components/Common/HyperLink';
import Image from '@/components/Common/Image';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';

import 'dayjs/locale/ko';

type PostRowItemProps = Post & {
  href: string;
};

const PostRowItem = ({
  title,
  description,
  thumbnail,
  createdAt,
  category,
  href,
}: PostRowItemProps): JSX.Element => {
  const { color, fontSize, fontFamily } = useStyledTheme();

  return (
    <HyperLink
      external={false}
      display='block'
      link={{
        href,
      }}
      padding='2rem'
      borderRadius='10px'
      backgroundColor={color.background3}
      hover={css`
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
      `}
    >
      <ContentThumbnailWrapper
        tagName='div'
        gap='2rem'
        justifyContent='space-between'
      >
        <Flex
          tagName='div'
          gap='0.5rem'
          flexDirection='column'
          flex='1'
        >
          <Text
            tagName='time'
            dateTime={createdAt}
            wordBreak='keep-all'
            fontSize={fontSize.SMALL}
            fontFamily={fontFamily.pretendard.MEDIUM}
            letterSpacing='-0.4px'
          >
            {dayjs(createdAt).locale('ko').format('YYYY년 MM월 DD일 (dddd)')}
          </Text>

          <Text
            tagName='h3'
            fontSize={fontSize.MEDIUM}
            wordBreak='keep-all'
            maxLine={2}
          >
            {title}
          </Text>

          <Text
            tagName='p'
            fontSize={fontSize.NORMAL}
            wordBreak='keep-all'
            minHeight='55px'
            maxLine={2}
            lineHeight='1.6'
          >
            {description}
          </Text>
        </Flex>

        {!isEmpty(thumbnail) && (
          <PostThumbnail
            src={thumbnail}
            alt={title}
            width='200px'
            height='110px'
            borderRadius='5px'
          />
        )}
      </ContentThumbnailWrapper>

      <Text
        tagName='span'
        fontSize={fontSize.NORMAL}
        fontFamily={fontFamily.pretendard.BOLD}
        color={color.main}
        display='inline-block'
        margin='1rem 0 0 0'
      >
        {category}
      </Text>
    </HyperLink>
  );
};

const ContentThumbnailWrapper = styled(Flex<'div'>)`
  ${({ theme }) => theme.device.mediumMobile} {
    flex-direction: column-reverse;
  }
`;

const PostThumbnail = styled(Image)`
  ${({ theme }) => theme.device.mediumMobile} {
    width: 100%;
    height: 100%;
  }
`;

export default PostRowItem;
