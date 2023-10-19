import { useEffect } from 'react';

const useLockBodyScroll = (condition: boolean): void => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [condition]);
};

export default useLockBodyScroll;
