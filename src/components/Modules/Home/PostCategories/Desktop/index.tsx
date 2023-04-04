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
  min-width: 145px;
  max-width: 145px;
  margin-top: 1rem;

  ${({ theme }) => theme.device.smallLaptop} {
    display: none;
  };
`;

export default DesktopPostCategories;