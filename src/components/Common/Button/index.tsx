import {
  MouseEvent,
  RefObject,
  ButtonHTMLAttributes,
} from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import {
  Cursor,
  JustifyContent,
  Position,
  Visibility,
} from '@/types/style';
import { fontSize as fontSizeStyle } from '@/styles/font';
import { cssPalette } from '@/styles/palette';
import { disableDrag } from '@/styles/utils';
import Spinner from '../Spinner';

type ButtonStyleProps = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  letterSpacing?: string;
  fontSize?: string;
  fontFamily?: string;
  backgroundColor?: string;
  opacity?: string;
  color?: string;
  spinnerColor?: string;
  position?: Position;
  flex?: number;
  gap?: string;
  justifyContent?: JustifyContent;
  border?: string;
  borderRadius?: string;
  visibility?: Visibility;
  boxShadow?: string;
  cursor?: Cursor;
  hover?: FlattenSimpleInterpolation;
}

type ButtonOwnProps = {
  className?: string;
  isLoading: boolean;
  buttonRef?: RefObject<HTMLButtonElement>;
}

type ButtonProps = ButtonStyleProps &
  ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  fontSize = fontSizeStyle.TINY,
  spinnerColor = cssPalette.white,
  justifyContent = 'center',
  isLoading = false,
  border = 'none',
  borderRadius = '5px',
  cursor = 'pointer',
  buttonRef,
  className,
  onClick,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (typeof onClick !== 'function' || isLoading) {
      return;
    }

    onClick(e);
  }

  return (
    <ButtonWrapper
      ref={buttonRef}
      className={className}
      onClick={handleClick}
      justifyContent={justifyContent}
      border={border}
      borderRadius={borderRadius}
      cursor={cursor}
      {...props}
    >
      {
        isLoading ?
        <Spinner
          width={22}
          height={22}
          strokeWidth={3}
          color={spinnerColor}
          secondaryColor={spinnerColor}
        />
        :
        children
      }
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<ButtonStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  border: ${({ border }) =>
    border === 'none' ? 'none' : `1px solid ${border}`};
  outline: none;
  opacity: ${({ opacity }) => opacity};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  position: ${({ position }) => position};
  display: flex;
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  visibility: ${({ visibility }) => visibility};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  box-shadow: ${({ boxShadow }) => boxShadow};
  ${disableDrag};
  cursor: ${({ cursor }) => cursor};

  ${({ theme }) => theme.media.hoverable} {
    &:hover {
      ${({ hover }) => hover};
    }
  };
`;

export default Button;
