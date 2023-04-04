import { memo } from 'react';
import styled from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import useResponsiveDevice from '@/hooks/utils/useResponsiveDevice';
import usePostToc from '@/hooks/post/usePostToc';
import { deviceSize } from '@/styles/device';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';
import Section from '@/components/Common/Section';

type PostTocProps = {
  postElement: HTMLElement | null;
}

const PostToc = ({
  postElement,
}: PostTocProps): JSX.Element => {
  const {
    color,
    fontFamily,
    fontSize,
  } = useStyledTheme();

  const isMediumLaptop = useResponsiveDevice({
    maxWidth: deviceSize.mediumLaptop,
  });

  const {
    headings,
    activeId,
    handleHeadingClick,
  } = usePostToc({
    postElement,
    disable: isMediumLaptop,
  });

  return (
    <PostTocWrapper
      tagName='aside'
    >
      <FixedWrapper
        tagName='div'
        gap='1rem'
        flexDirection='column'
      >
        {
          headings.map(({
            id,
            text,
            level,
          }) => (
            <Text
              tagName='span'
              key={id}
              fontSize={level > 2 ? fontSize.SMALL : fontSize.NORMAL}
              lineHeight='1.5'
              wordBreak='keep-all'
              fontFamily={fontFamily.pretendard.MEDIUM}
              color={id === activeId ? color.main : color.contrast}
              cursor='pointer'
              margin={level > 2 ? `0 0 0 ${level * 10 / 2}px` : '0'}
              onClick={() => handleHeadingClick(id)}
            >
              {text}
            </Text>
          ))
        }
      </FixedWrapper>
    </PostTocWrapper>
  );
}

const PostTocWrapper = styled(Section<'aside'>)`
  position: absolute;
  left: 102%;

  ${({ theme }) => theme.device.mediumLaptop} {
    display: none;
  };
`;

const FixedWrapper = styled(Flex<'div'>)`
  position: fixed;
  top: 200px;
  max-width: 250px;
`;

export default memo(PostToc);