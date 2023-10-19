import { ReactNode, memo, MouseEventHandler } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { fonts } from '@/assets/fonts';
import useLockBodyScroll from '@/hooks/scroll/useLockBodyScroll';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { constantSafeArea, envSafeArea } from '@/styles/device';
import Flex from '../Flex';
import CloseIcon from '../Icon/CloseIcon';
import Section from '../Section';
import Text from '../Text';

const Portal = dynamic(() => import('../Portal'), {
  ssr: false,
});

type ModalStyleProps = {
  width?: string;
  maxWidth?: string;
  height?: string;
  padding?: string;
};

type ModalProps = ModalStyleProps & {
  className?: string;
  isModal: boolean;
  handleModal: MouseEventHandler;
  title: ReactNode;
  children: ReactNode;
};

const Modal = ({
  width,
  maxWidth,
  height,
  padding = '3rem',
  isModal,
  handleModal,
  title,
  className,
  children,
}: ModalProps): JSX.Element => {
  const { color, fontSize } = useStyledTheme();

  useLockBodyScroll(isModal);

  if (!isModal) {
    return <></>;
  }

  return (
    <Portal portalId='modal-portal'>
      <ModalBackground tagName='div' onClick={handleModal}></ModalBackground>

      <ModalContent
        tagName='div'
        className={className}
        width={width}
        maxWidth={maxWidth}
        height={height}
        padding={padding}
        backgroundColor={color.theme}
        borderRadius='5px'
        onClick={(e) => e.stopPropagation()}
      >
        <Flex tagName='div' justifyContent='space-between' padding='0 0 1rem 0'>
          <Text
            tagName='h2'
            fontSize={fontSize.MEDIUM}
            fontFamily={fonts.pretendard.BOLD}
          >
            {title}
          </Text>

          <CloseIcon
            fontSize={fontSize.BIG}
            cursor='pointer'
            onClick={handleModal}
          />
        </Flex>

        {children}
      </ModalContent>
    </Portal>
  );
};

const ModalBackground = styled(Section<'div'>)`
  position: fixed;
  top: ${constantSafeArea.top};
  top: ${envSafeArea.top};
  left: ${constantSafeArea.left};
  left: ${envSafeArea.left};
  right: ${constantSafeArea.right};
  right: ${envSafeArea.right};
  bottom: ${constantSafeArea.bottom};
  bottom: ${envSafeArea.bottom};
  background-color: ${({ theme }) => theme.color.overlay};
  z-index: 6;
`;

const ModalContent = styled(Section<'div'>)<ModalStyleProps>`
  position: fixed;
  top: calc(${constantSafeArea.top} + 50%);
  top: calc(${envSafeArea.top} + 50%);
  left: calc(${constantSafeArea.left} + 50%);
  left: calc(${envSafeArea.left} + 50%);
  transform: translate(-50%, -50%);
  padding: ${({ padding }) => padding};
  z-index: 7;
`;

export default memo(Modal);
