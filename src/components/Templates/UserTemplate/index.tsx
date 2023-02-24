import { ReactNode } from 'react';
import Header from '@/components/Templates/UserTemplate/Header';

type UserTemplateProps = {
  children: ReactNode;
}

const UserTemplate = ({
  children,
}: UserTemplateProps): JSX.Element => {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

export default UserTemplate;