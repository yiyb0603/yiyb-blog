import { useMemo } from 'react';
import { Post, allPosts } from '@/contentlayer/generated';
import { PER_PAGE_COUNT } from '@/constants/post';
import chunkArray from '@/utils/array/chunkArray';
import isEmpty from '@/utils/is-packages/isEmpty';

type Props = {
  category?: string;
}

const usePosts = ({
  category,
}: Props = {}) => {
  const basePosts = [...allPosts].sort((prev, next) => {
    return Date.parse(next.createdAt) - Date.parse(prev.createdAt);
  });

  const filterPosts = isEmpty(category) ? basePosts :
    basePosts.filter((post) => {
      return post.category === category;
    });

  const chunkPosts = useMemo<Post[][]>(() => chunkArray({
    items: filterPosts,
    perItems: PER_PAGE_COUNT,
  }), [filterPosts]);

  return {
    allPosts: basePosts,
    filterPosts,
    chunkPosts,
  };
}

export default usePosts;