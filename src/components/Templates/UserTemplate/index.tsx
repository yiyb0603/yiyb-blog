import { ReactNode } from 'react';
import Section from '@/components/Common/Section';
import Header from './Header';
import Footer from './Footer';

type UserTemplateProps = {
  children: ReactNode;
};

const UserTemplate = ({ children }: UserTemplateProps): JSX.Element => {
  return (
    <>
      <Header />

      <Section tagName='main'>{children}</Section>

      <Footer />
    </>
  );
};

export default UserTemplate;
