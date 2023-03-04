import { useState, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { Heading } from '@/types/component';
import isEmpty from '@/utils/is-packages/isEmpty';
import removeHTMLString from '@/utils/string/removeHTMLString';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';
import Section from '@/components/Common/Section';

type PostTocProps = {
  titleShowing: boolean;
  postElement: HTMLElement | null;
}

const PostToc = ({
  titleShowing,
  postElement,
}: PostTocProps): JSX.Element => {
  const {
    color,
    fontFamily,
    fontSize,
  } = useStyledTheme();

  const [
    activeId,
    setActiveId,
  ] = useState<string>('');

  const [
    headings,
    setHeadings,
  ] = useState<Heading[]>([]);
  console.log(activeId, titleShowing);

  const handleHeadingClick = (id: string): void => {
    const element = document.getElementById(id);

    if (element === null) {
      return;
    }

    window.scrollTo({
      top: element.offsetTop - 20,
      behavior: 'smooth',
    });
  }

  const callback = useCallback((entries: IntersectionObserverEntry[]): void => {
    const intersectEntries = entries.filter(({ isIntersecting }) => isIntersecting);

    if (!isEmpty(intersectEntries)) {
      setActiveId(intersectEntries[0].target.id);
    }
  }, []);

  useEffect(() => {
    if (!postElement) {
      return;
    }

    const observer = new IntersectionObserver(callback, {
      threshold: 1,
      rootMargin: '-70px 0px -50% 0px',
    });

    const headingElements = Array.from(postElement.querySelectorAll('h2, h3'));

    let headings: Heading[] = [];

    for (const headingElement of headingElements) {
      headings = [
        ...headings,
        {
          id: headingElement.id,
          level: +(headingElement.tagName.toLowerCase().replace('h', '')),
          text: removeHTMLString(headingElement.innerHTML),
          element: headingElement,
        },
      ];

      observer.observe(headingElement);
    }

    setHeadings(headings);

    return () => {
      observer.disconnect();
    }
  }, [callback, postElement]);

  // useEffect(() => {
  //   if (titleShowing) {
  //     setActiveId('');
  //   }
  // }, [titleShowing]);

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
              letterSpacing='-0.2px'
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
  left: 103%;
`;

const FixedWrapper = styled(Flex<'div'>)`
  position: fixed;
  top: 200px;
  max-width: 250px;
`;

export default PostToc;