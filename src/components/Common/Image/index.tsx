import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

type ImageStyleProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
}

type ImageOwnProps = ImgHTMLAttributes<HTMLImageElement> & {}

type ImageProps = ImageStyleProps & ImageOwnProps

const Image = (props: ImageProps): JSX.Element => {
  return (
    <CustomImage
      {...props}
    />
  );
}

const CustomImage = styled.img<ImageStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`;

export default Image;