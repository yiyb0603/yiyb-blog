import { Oval } from 'react-loader-spinner';

type SpinnerProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
  secondaryColor?: string;
}

const Spinner = ({
  width,
  height,
  strokeWidth,
  color,
  secondaryColor,
}: SpinnerProps): JSX.Element => {
  return (
    <Oval
      width={width}
      height={height}
      color={color}
      strokeWidth={strokeWidth}
      secondaryColor={secondaryColor}
    />
  );
}

export default Spinner;