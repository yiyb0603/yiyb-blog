import styled, { useTheme } from 'styled-components';
import { fonts } from '@/assets/fonts';
import useDialog from '@/hooks/dialog/useDialog';
import { fontSize } from '@/styles/font';
import Flex from '../Flex';
import Button from '../Button';
import Modal from '../Modal';
import Section from '../Section';

const Dialog = (): JSX.Element => {
  const { color } = useTheme();

  const {
    isDialog,
    dialogType,
    title,
    content,
    onResolve,
    onReject,
  } = useDialog();

  return (
    <Modal
      isModal={isDialog}
      handleModal={onReject}
      width='90%'
      maxWidth='450px'
      title={title}
    >
      <DialogContentWrapper
        tagName='div'
        margin='0 0 2rem'
      >
        {content}
      </DialogContentWrapper>

      <Flex
        tagName='div'
        gap='1.5rem'
        justifyContent='flex-end'
      >
        <Button
          width='70px'
          height='38px'
          fontSize={fontSize.SMALL}
          fontFamily={fonts.pretendard.MEDIUM}
          color={color.white}
          backgroundColor={color.main}
          onClick={onResolve}
        >
          확인
        </Button>

        {
          dialogType === 'confirm' &&
          <Button
            width='70px'
            height='38px'
            fontSize={fontSize.SMALL}
            fontFamily={fonts.pretendard.MEDIUM}
            border={color.border2}
            color={color.contrast}
            backgroundColor={color.theme}
            onClick={onReject}
          >
            취소
          </Button>
        }
      </Flex>
    </Modal>
  );
}

const DialogContentWrapper = styled(Section<'div'>)`
  min-height: 46px;
  font-size: ${fontSize.NORMAL};
  letter-spacing: -0.2px;
  line-height: 1.5;
  white-space: pre-line;
  word-break: keep-all;
`;

export default Dialog;