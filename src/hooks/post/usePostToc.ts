import { useState, useEffect } from 'react';
import { Heading } from '@/types/component';
import isEmpty from '@/utils/is-packages/isEmpty';
import removeHTMLString from '@/utils/string/removeHTMLString';

type Props = {
  postId: string;
  postElement: HTMLElement | null;
  disable: boolean;
}

const usePostToc = ({
  postId,
  postElement,
  disable,
}: Props) => {
  const [
    activeId,
    setActiveId,
  ] = useState<string>('');

  const [
    headings,
    setHeadings,
  ] = useState<Heading[]>([]);

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

  useEffect(() => {
    if (!postElement || disable || isEmpty(postId)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const intersectEntries = entries.filter(({ isIntersecting }) => isIntersecting);

      if (!isEmpty(intersectEntries)) {
        setActiveId(intersectEntries[0].target.id);
      }
    }, {
      threshold: 0.95,
      rootMargin: '-70px 0px -70% 0px',
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
    };
  }, [postElement, postId, disable]);

  return {
    headings,
    activeId,
    handleHeadingClick,
  };
}

export default usePostToc;