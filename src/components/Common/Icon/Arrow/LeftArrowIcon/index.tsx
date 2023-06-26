import { IconBaseProps } from 'react-icons';
import { MdOutlineNavigateBefore } from 'react-icons/md';

const LeftArrowIcon = (props: IconBaseProps): JSX.Element => {
  return (
    <MdOutlineNavigateBefore
      {...props}
    />
  );
}

export default LeftArrowIcon;