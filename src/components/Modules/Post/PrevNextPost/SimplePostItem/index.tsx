import styled, { css } from 'styled-components';
import { Post } from '@/contentlayer/generated';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { pageRoute } from '@/libs/models/route';
import HyperLink from '@/components/Common/HyperLink';
import Image from '@/components/Common/Image';
import Text from '@/components/Common/Text';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';

type SimplePostItemProps = Post & {
  itemType: 'PREV' | 'NEXT';
};

const SimplePostItem = ({
  _raw,
  title,
  description,
  thumbnail,
  itemType,
}: SimplePostItemProps): JSX.Element => {
  const { color, fontSize, fontFamily } = useStyledTheme();

  return (
    <HyperLink
      external={false}
      link={{
        href: `${pageRoute.POSTS}/${_raw.flattenedPath}`,
        passHref: true,
      }}
      borderRadius='5px'
      border={{
        all: `1px solid ${color.border2}`,
      }}
      hover={css`
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
      `}
    >
      <Flex
        tagName='article'
        flexDirection={itemType === 'PREV' ? 'row' : 'row-reverse'}
        alignItems='stretch'
      >
        <ThumbnailImage
          src={thumbnail}
          alt={title}
          maxWidth='240px'
          borderRadius='5px'
          loading='lazy'
        />

        <Section
          tagName='div'
          flex='1'
          padding='2rem'
        >
          <Text
            tagName='span'
            display='inline-block'
            fontSize={fontSize.LITTLE}
            fontFamily={fontFamily.pretendard.MEDIUM}
            margin='0 0 0.5rem 0'
          >
            {itemType === 'PREV' ? '이전글' : '다음글'}
          </Text>

          <Text
            tagName='h2'
            fontSize={fontSize.NORMAL}
            wordBreak='keep-all'
            margin='0 0 0.75rem 0'
          >
            {title}
          </Text>

          <Text
            tagName='p'
            wordBreak='keep-all'
            fontSize={fontSize.SMALL}
            maxLine={2}
          >
            {description}
          </Text>
        </Section>
      </Flex>
    </HyperLink>
  );
};

const ThumbnailImage = styled(Image)`
  ${({ theme }) => theme.device.smallTablet} {
    display: none;
  }
`;

export default SimplePostItem;
