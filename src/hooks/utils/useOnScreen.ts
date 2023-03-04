import { useState, useCallback, useEffect, RefObject } from 'react';

type Props<T extends HTMLElement> = {
  ref: RefObject<T>;
  defaultValue: boolean;
  rootMargin: string;
  threshold: number;
  disable: boolean;
}

const useOnScreen = <T extends HTMLElement>({
  ref,
  defaultValue,
  rootMargin,
  threshold,
  disable,
}: Props<T>) => {
  const [
    isIntersecting,
    setIntersecting,
  ] = useState<boolean>(defaultValue);

  const intersectingCallback = useCallback((
    [entry]: IntersectionObserverEntry[],
  ) => {
    setIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (ref.current === null || disable) {
      return;
    }

    const observer = new IntersectionObserver(intersectingCallback, {
      rootMargin,
      threshold,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [disable, intersectingCallback, ref, rootMargin, threshold]);

  return isIntersecting;
}

export default useOnScreen;