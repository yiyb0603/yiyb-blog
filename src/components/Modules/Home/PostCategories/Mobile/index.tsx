import { CategoriesProps } from '../common';
import styled from 'styled-components';
import Section from '@/components/Common/Section';
import PostCategories from '..';

type MobilePostCategoriesProps = CategoriesProps & {}

const MobilePostCategories = ({
  selectCategory,
  categories,
}: MobilePostCategoriesProps): JSX.Element => {
  return (
    <CategoriesWrapper
      tagName='section'
    >
      <PostCategories
        flexDirection='row'
        whiteSpace='pre'
        selectCategory={selectCategory}
        categories={categories}
      />
    </CategoriesWrapper>
  );
}

const CategoriesWrapper = styled(Section<'section'>)`
  display: none;

  ${({ theme }) => theme.device.tablet} {
    display: flex;
  };
`;

export default MobilePostCategories;