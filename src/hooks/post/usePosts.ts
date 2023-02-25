import { allPosts } from '@/contentlayer/generated';
import isEmpty from '@/utils/is-packages/isEmpty';

type Props = {
  category?: string;
}

const usePosts = ({
  category,
}: Props) => {
  const basePosts = allPosts.sort((prev, next) => {
    return Date.parse(next.createdAt) - Date.parse(prev.createdAt);
  });

  const filterPosts = isEmpty(category) ? basePosts :
    basePosts.filter((post) => {
      return post.category === category;
    });

  return {
    allPosts: basePosts,
    filterPosts,
  };
}

export default usePosts;