import { useState, useCallback, useEffect } from 'react';

type UseOnScreenProps = {
  callback?: Function;
  defaultValue: boolean;
  rootMargin: string;
  threshold: number;
  disable: boolean;
}

const useOnScreen = ({
  callback,
  defaultValue,
  rootMargin,
  threshold,
  disable,
}: UseOnScreenProps) => {
  const [
    intersect,
    setIntersect,
  ] = useState<HTMLElement | null>(null);

  const [
    isIntersecting,
    setIntersecting,
  ] = useState<boolean>(defaultValue);

  const intersectingCallback = useCallback((
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    if (entry.isIntersecting) {
      if (typeof callback === 'function') {
        callback(entry.target);
      }
    }

    setIntersecting(entry.isIntersecting);
  }, [callback]);

  useEffect(() => {
    if (intersect === null || disable) {
      return;
    }

    const observer = new IntersectionObserver(intersectingCallback, {
      rootMargin,
      threshold,
    });

    observer.observe(intersect);

    return () => {
      observer.disconnect();
    };
  }, [intersect, disable, rootMargin, threshold, intersectingCallback]);

  return {
    intersect: setIntersect,
    isIntersecting,
  };
}

export default useOnScreen;