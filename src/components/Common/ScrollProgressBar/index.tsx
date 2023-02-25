import { memo } from 'react';
import styled from 'styled-components';
import useScrollProgress from '@/hooks/scroll/useScrollProgress';
import { constantSafeArea, envSafeArea } from '@/styles/device';

type ScrollProgressBarProps = {
  className?: string;
}

const ScrollProgressBar = ({
  className,
}: ScrollProgressBarProps): JSX.Element => {
  const {
    progressRef,
    progress,
    handleProgressMove,
  } = useScrollProgress();

  return (
    <ScrollProgressLineWrapper
      className={className}
      ref={progressRef}
      onClick={handleProgressMove}
    >
      <ScrollProgress
        progress={progress}
      ></ScrollProgress>
    </ScrollProgressLineWrapper>
  );
}

const ScrollProgressLineWrapper = styled.div`
  position: fixed;
  left: ${constantSafeArea.left};
  left: ${envSafeArea.left};
  right: ${constantSafeArea.right};
  right: ${envSafeArea.right};
  top: calc(${envSafeArea.top} + 66px);
  z-index: 3;
  background-color: ${({ theme }) => theme.color.theme};
  cursor: pointer;
`;

const ScrollProgress = styled.div<{ progress: number; }>`
  width: 100%;
  height: 4px;
  transform: scaleX(${({ progress }) => progress});
  transform-origin: left center;
  background-color: ${({ theme }) => theme.color.main};
`;

export default memo(ScrollProgressBar);