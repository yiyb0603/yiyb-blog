import { allPosts as _allPosts, Post } from '@/contentlayer/generated';
import isEmpty from '../is-packages/isEmpty';

type PostsByCategory = Record<string, Post[]>;

export const allPosts = [..._allPosts].sort((prev, next) => {
  return Date.parse(next.createdAt) - Date.parse(prev.createdAt);
});

export const postsByCategory = allPosts.reduce((postsByCategory, post) => {
  postsByCategory[post.category] = [
    ...(postsByCategory[post.category] || []),
    post,
  ];

  return postsByCategory;
}, {} as PostsByCategory);

export const getPostsByCategory = (category: string | undefined) => {
  return isEmpty(category) ? allPosts : postsByCategory[category];
};

export const categories = Object.entries(postsByCategory)
  .sort((prev, next) => {
    const nextPosts = next[1];
    const prevPosts = prev[1];

    return nextPosts.length - prevPosts.length;
  })
  .map(([category]) => category);
