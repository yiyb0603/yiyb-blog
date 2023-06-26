import styled from 'styled-components';
import Section from '@/components/Common/Section';
import Contacts from './Contacts';

const StickyContents = (): JSX.Element => {
  return (
    <StickyContentsWrapper
      tagName='aside'
    >
      <Contacts />
    </StickyContentsWrapper>
  );
}

const StickyContentsWrapper = styled(Section<'aside'>)`
  min-width: 210px;
  position: sticky;
  top: 100px;
  flex: 1;
  margin-top: 1rem;
`;

export default StickyContents;