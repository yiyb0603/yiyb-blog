import { ReactNode } from 'react';
import Section from '@/components/Common/Section';
import Header from './Header';
import Footer from './Footer';

type UserTemplateProps = {
  children: ReactNode;
}

const UserTemplate = ({
  children,
}: UserTemplateProps): JSX.Element => {
  return (
    <>
      <Header />

      <Section
        tagName='main'
      >
        <Section
          tagName='div'
          maxWidth='768px'
          margin='0 auto'
          padding='4rem 2rem'
        >
          {children}
        </Section>
      </Section>

      <Footer />
    </>
  );
}

export default UserTemplate;