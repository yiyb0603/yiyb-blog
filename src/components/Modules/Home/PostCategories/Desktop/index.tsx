import styled from 'styled-components';
import Section from '@/components/Common/Section';
import { CategoriesProps } from '../common';
import PostCategories from '..';

type DesktopPostCategoriesProps = CategoriesProps & {}

const DesktopPostCategories = ({
  selectCategory,
  categories,
}: DesktopPostCategoriesProps): JSX.Element => {
  return (
    <CategoriesWrapper
      tagName='aside'
    >
      <PostCategories
        flexDirection='column'
        whiteSpace='initial'
        selectCategory={selectCategory}
        categories={categories}
      />
    </CategoriesWrapper>
  );
}

const CategoriesWrapper = styled(Section<'aside'>)`
  position: sticky;
  top: 100px;
  min-width: 130px;
  max-width: 130px;
  margin-top: 5.5rem;

  ${({ theme }) => theme.device.tablet} {
    display: none;
  };
`;

export default DesktopPostCategories;