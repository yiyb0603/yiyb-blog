import { Post } from '@/contentlayer/generated';
import { pageRoute } from '@/libs/models/route';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import PostRowItem from './PostRowItem';
import useStyledTheme from '@/hooks/theme/useStyledTheme';

type PostListProps = {
  category: string;
  posts: Post[];
}

const PostList = ({
  category,
  posts,
}: PostListProps) => {
  const {
    fontSize,
  } = useStyledTheme();

  return (
    <Section
      tagName='div'
    >
      <Text
        tagName='h2'
        fontSize={fontSize.BIG}
        margin='0 0 1.25rem 0'
      >
        📝 {category} ({posts.length.toLocaleString()})
      </Text>

      <Flex
        tagName='div'
        gap='2rem'
        flexDirection='column'
      >
        {
          posts.map((post) => (
            <PostRowItem
              key={post._id}
              {...post}
              href={`${pageRoute.POSTS}/${post._raw.flattenedPath}`}
            />
          ))
        }
      </Flex>
    </Section>
  );
}

export default PostList;