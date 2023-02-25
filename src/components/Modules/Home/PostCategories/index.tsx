import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';
import HyperLink from '@/components/Common/HyperLink';

type PostCategoriesProps = {
  selectCategory: string;
  categories: string[];
}

const PostCategories = ({
  selectCategory,
  categories,
}: PostCategoriesProps): JSX.Element => {
  const {
    color,
    fontSize,
    fontFamily,
  } = useStyledTheme();

  return (
    <Flex
      tagName='div'
      gap='1rem'
      overflow='auto'
    >
      {
        categories.map((category) => (
          <HyperLink
            key={category}
            external={false}
            link={{
              href: {
                query: {
                  category,
                },
              },
            }}
            padding='1rem 1.75rem'
            borderRadius='10px'
            color={category === selectCategory ? color.white : color.contrast}
            backgroundColor={category === selectCategory ? color.main : color.background3}
          >
            <Text
              tagName='span'
              fontSize={fontSize.SMALL}
              fontFamily={fontFamily.pretendard.MEDIUM}
            >
              {category}
            </Text>
          </HyperLink>
        ))
      }
    </Flex>
  );
}

export default PostCategories;