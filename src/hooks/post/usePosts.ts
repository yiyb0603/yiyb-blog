import { useMemo } from 'react';
import { Post, allPosts } from '@/contentlayer/generated';
import { PER_PAGE_COUNT } from '@/constants/post';
import chunkArray from '@/utils/array/chunkArray';
import isEmpty from '@/utils/is-packages/isEmpty';

type PostsByCategory = Record<string, Post[]>;

type Props = {
  category?: string;
}

const usePosts = ({
  category,
}: Props = {}) => {
  const basePosts = [...allPosts].sort((prev, next) => {
    return Date.parse(next.createdAt) - Date.parse(prev.createdAt);
  });

  const postsByCategory = useMemo<PostsByCategory>(() => {
    return basePosts.reduce((postsByCategory, post) => {
      postsByCategory[post.category] = [
        ...postsByCategory[post.category] || [],
        post,
      ];
  
      return postsByCategory;
    }, {} as PostsByCategory)
  }, [basePosts]);

  const filterPosts = isEmpty(category) ? basePosts : postsByCategory[category];

  const categories = useMemo<string[]>(() => {
    return Object.entries(postsByCategory).sort((prev, next) => {
      const nextPosts = next[1];
      const prevPosts = prev[1];
  
      return nextPosts.length - prevPosts.length;
    }).map(([category]) => category);
  }, [postsByCategory]);

  const chunkPosts = useMemo<Post[][]>(() => chunkArray({
    items: filterPosts,
    perItems: PER_PAGE_COUNT,
  }), [filterPosts]);

  return {
    allPosts: basePosts,
    filterPosts,
    chunkPosts,
    categories,
  };
}

export default usePosts;