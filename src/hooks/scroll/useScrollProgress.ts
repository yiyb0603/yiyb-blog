import { useState, useRef, useCallback, useEffect, MouseEvent } from 'react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleProgressMove = useCallback(
    ({ clientX }: MouseEvent<HTMLDivElement>): void => {
      if (!progressRef.current) {
        return;
      }

      const { scrollWidth } = progressRef.current;

      const selectedPercent = (clientX / scrollWidth) * 100;

      const { scrollHeight, clientHeight } = document.documentElement;
      const windowHeight = scrollHeight - clientHeight;

      const moveScrollPercent = (windowHeight * selectedPercent) / 100;

      window.scrollTo({
        top: moveScrollPercent,
        behavior: 'smooth',
      });
    },
    [],
  );

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      return void setProgress(0);
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;

    setProgress(currentPercent);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return {
    progress,
    handleProgressMove,
    progressRef,
  };
};

export default useScrollProgress;
