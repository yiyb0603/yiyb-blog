import { allPosts } from '@/contentlayer/generated';

const usePosts = () => {
  // TODO: 정렬기능

  return {
    posts: allPosts,
  };
}

export default usePosts;