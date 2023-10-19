import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { ellipsisLine } from '@/styles/utils';
import {
  Cursor,
  Display,
  TextAlign,
  WhiteSpace,
  WordBreak,
} from '@/types/style';

type TextStyleProps = {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  display?: Display;
  textAlign?: TextAlign;
  lineHeight?: string;
  letterSpacing?: string;
  wordBreak?: WordBreak;
  whiteSpace?: WhiteSpace;
  minHeight?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  cursor?: Cursor;
  maxLine?: number;
  hover?: FlattenSimpleInterpolation;
};

type AbleElementType =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'a'
  | 'time';

type TextOwnProps<T extends AbleElementType> = {
  tagName: T | undefined;
  className?: string;
  textRef?: ComponentPropsWithRef<T>['ref'];
};

type TextProps<T extends AbleElementType> = TextStyleProps &
  TextOwnProps<T> &
  ComponentPropsWithoutRef<T>;

const Text = <T extends AbleElementType>({
  tagName,
  className,
  textRef,
  children,
  ...props
}: TextProps<T>): JSX.Element => {
  return (
    <CustomText
      as={tagName || ('p' as AbleElementType)}
      className={className}
      ref={textRef}
      {...props}
    >
      {children}
    </CustomText>
  );
};

const CustomText = styled.div<TextStyleProps>`
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  word-break: ${({ wordBreak }) => wordBreak};
  white-space: ${({ whiteSpace }) => whiteSpace};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};
  cursor: ${({ cursor }) => cursor};

  ${({ maxLine }) => maxLine && ellipsisLine(maxLine)}

  ${({ theme }) => theme.media.hoverable} {
    &:hover {
      ${({ hover }) => hover};
    }
  }
`;

export default Text;
