import { RefObject, useRef, useEffect } from 'react';

const useUtterance = <T extends HTMLElement>(
  utteranceRef: RefObject<T>,
): void => {
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (utteranceRef.current === null || initializedRef.current) {
      return;
    }

    const utteranceScript = document.createElement('script');

    utteranceScript.src = 'https://utteranc.es/client.js';
    utteranceScript.async = true;
    utteranceScript.setAttribute('repo', 'yiyb0603/yiyb-blog');
    utteranceScript.setAttribute('issue-term', 'title');
    utteranceScript.setAttribute('theme', 'github-light');
    utteranceScript.setAttribute('label', 'blog-comment');

    utteranceScript.crossOrigin = 'anonymous';

    utteranceRef.current.appendChild(utteranceScript);

    initializedRef.current = true;
  }, [utteranceRef]);
}

export default useUtterance;