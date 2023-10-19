import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

type ImageStyleProps = {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  borderRadius?: string;
  margin?: string;
};

type ImageOwnProps = ImgHTMLAttributes<HTMLImageElement> & {};

type ImageProps = ImageStyleProps & ImageOwnProps;

const Image = (props: ImageProps): JSX.Element => {
  return <CustomImage {...props} />;
};

const CustomImage = styled.img<ImageStyleProps>`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`;

export default Image;
