import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { ellipsisLine } from '@/styles/utils';
import { Display, WordBreak } from '@/types/style';

type TextStyleProps = {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  display?: Display;
  lineHeight?: string;
  letterSpacing?: string;
  wordBreak?: WordBreak;
  minHeight?: string;
  margin?: string;
  padding?: string;
  maxLine?: number;
  hover?: FlattenSimpleInterpolation;
}

type AbleElementType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'time';

type TextOwnProps<T extends AbleElementType> = {
  tagName: T | undefined;
  className?: string;
  textRef?: ComponentPropsWithRef<T>['ref'];
}

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
      as={tagName || 'p' as AbleElementType}
      className={className}
      ref={textRef}
      {...props}
    >
      {children}
    </CustomText>
  );
}

const CustomText = styled.div<TextStyleProps>`
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  word-break: ${({ wordBreak }) => wordBreak};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};

  ${({ maxLine }) => maxLine && ellipsisLine(maxLine)}

  ${({ theme }) => theme.media.hoverable} {
    &:hover {
      ${({ hover }) => hover};
    }
  };
`;

export default Text;