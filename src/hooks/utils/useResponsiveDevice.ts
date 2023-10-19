import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import useRootSelector from '../redux/useRootSelector';

type Props = {
  maxWidth: string;
};

const useResponsiveDevice = ({ maxWidth }: Props): boolean => {
  const { userAgent } = useRootSelector(({ user }) => user);

  const [isFitDevice, setIsFitDevice] = useState<boolean>(
    userAgent?.toLowerCase().includes('mobi') || false,
  );

  const mediaQuery = useMediaQuery({
    maxWidth,
  });

  useEffect(() => {
    setIsFitDevice(mediaQuery);
  }, [mediaQuery]);

  return isFitDevice;
};

export default useResponsiveDevice;
