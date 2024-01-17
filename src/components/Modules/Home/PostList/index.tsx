import { Post } from '@/contentlayer/generated';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import isEmpty from '@/utils/is-packages/isEmpty';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import PostRowItem from './PostRowItem';
import NoPosts from './NoPosts';

type PostListProps = {
  category: string;
  posts: Post[];
  postsCount: number;
};

const PostList = ({ category, posts, postsCount }: PostListProps) => {
  const { fontSize } = useStyledTheme();

  return (
    <Section tagName='div'>
      <Text
        tagName='h2'
        fontSize={fontSize.BIG}
        margin='0 0 1.25rem 0'
      >
        📝 {category} ({postsCount.toLocaleString()})
      </Text>

      {isEmpty(posts) ? (
        <NoPosts />
      ) : (
        <Flex
          tagName='div'
          gap='2rem'
          flexDirection='column'
        >
          {posts.map((post) => (
            <PostRowItem
              key={post._id}
              {...post}
              href={post.url}
            />
          ))}
        </Flex>
      )}
    </Section>
  );
};

export default PostList;
