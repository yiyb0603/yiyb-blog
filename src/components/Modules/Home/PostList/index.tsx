import { Post } from '@/contentlayer/generated';
import { pageRoute } from '@/libs/models/route';
import Flex from '@/components/Common/Flex';
import PostRowItem from './PostRowItem';

type PostListProps = {
  posts: Post[];
}

const PostList = ({
  posts,
}: PostListProps) => {
  return (
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
  );
}

export default PostList;