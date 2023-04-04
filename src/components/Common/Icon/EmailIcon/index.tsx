import { IconBaseProps } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';

const EmailIcon = (props: IconBaseProps): JSX.Element => {
  return (
    <AiOutlineMail
      {...props}
    />
  );
}

export default EmailIcon;