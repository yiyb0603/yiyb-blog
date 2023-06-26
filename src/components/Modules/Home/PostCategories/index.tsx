import styled, { css } from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { FlexDirection, WhiteSpace } from '@/types/style';
import HyperLink from '@/components/Common/HyperLink';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';

type PostCategoriesProps = {
  flexDirection: FlexDirection;
  whiteSpace: WhiteSpace;
  selectCategory: string;
  categories: string[];
}

const PostCategories = ({
  flexDirection,
  whiteSpace,
  selectCategory,
  categories,
}: PostCategoriesProps) => {
  const {
    color,
    fontSize,
    fontFamily,
  } = useStyledTheme();

  return (
    <CategoriesWrapper
      tagName='ul'
      gap='1rem'
      flexDirection={flexDirection}
      padding='0 1rem 1rem 0'
      maxHeight='365px'
      overflow='auto'
    >
      {
        categories.map((category) => (
          <CategoryItemWrapper
            key={category}
          >
            <HyperLink
              external={false}
              link={{
                href: {
                  query: category === '전체' ? {} : {
                    category,
                  },
                },
              }}
              display='block'
              padding='1rem 1.75rem'
              borderRadius='5px'
              whiteSpace={whiteSpace}
              color={category === selectCategory ? color.white : color.contrast}
              backgroundColor={category === selectCategory ? color.main : color.background3}
              hover={css`
                transition: all 0.15s ease-in-out;
                color: ${color.white};
                background-color: ${color.main};
              `}
            >
              <Text
                tagName='span'
                fontSize={fontSize.NORMAL}
                fontFamily={fontFamily.pretendard.MEDIUM}
              >
                {category}
              </Text>
            </HyperLink>
          </CategoryItemWrapper>
        ))
      }
    </CategoriesWrapper>
  )
}

const CategoriesWrapper = styled(Flex<'ul'>)`
  &::-webkit-scrollbar {
    width: 5px;
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.main};
  }
`;

const CategoryItemWrapper = styled.li`
  list-style: none;
`;

export default PostCategories;