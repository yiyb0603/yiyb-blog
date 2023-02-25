import { ReactNode } from 'react';
import Header from '@/components/Templates/UserTemplate/Header';
import Section from '@/components/Common/Section';

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
    </>
  );
}

export default UserTemplate;