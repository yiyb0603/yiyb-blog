import styled from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import { CategoriesProps } from '../common';
import PostCategories from '..';

type DesktopPostCategoriesProps = CategoriesProps & {};

const DesktopPostCategories = ({
  selectCategory,
  categories,
}: DesktopPostCategoriesProps): JSX.Element => {
  const { fontSize } = useStyledTheme();

  return (
    <CategoriesWrapper tagName='aside'>
      <Text
        tagName='h2'
        fontSize={fontSize.MEDIUM}
        margin='0 0 1.25rem 0'
      >
        📘 Categories
      </Text>

      <PostCategories
        flexDirection='column'
        whiteSpace='initial'
        selectCategory={selectCategory}
        categories={categories}
      />
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled(Section<'aside'>)`
  position: sticky;
  top: 100px;
  min-width: 155px;
  max-width: 155px;
  margin-top: 1rem;

  ${({ theme }) => theme.device.smallLaptop} {
    display: none;
  }
`;

export default DesktopPostCategories;
