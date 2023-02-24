import { IconBaseProps } from 'react-icons';
import { SystemTheme } from '@/enums/theme';
import useTheme from '@/hooks/theme/useTheme';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import SunIcon from '@/components/Common/Icon/SunIcon';
import MoonIcon from '@/components/Common/Icon/MoonIcon';

const ToggleTheme = (): JSX.Element => {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  const {
    color,
    fontSize,
  } = useStyledTheme();

  const iconProps: IconBaseProps = {
    fontSize: fontSize.EXTRA_BIG,
    color: color.contrast,
    cursor: 'pointer',
    onClick: toggleTheme,
  };

  switch (theme) {
    case SystemTheme.LIGHT:
      return (
        <SunIcon
          {...iconProps}
        />
      );

    case SystemTheme.DARK:
      return (
        <MoonIcon
          {...iconProps}
        />
      );

    default:
      return <></>;
  }
}

export default ToggleTheme;