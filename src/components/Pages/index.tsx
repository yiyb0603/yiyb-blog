import { NextPage } from 'next';
import { useRouter } from 'next/router';
import usePosts from '@/hooks/post/usePosts';
import WelcomeBlog from '@/components/Modules/Home/WelcomeBlog';
import PostList from '@/components/Modules/Home/PostList';
import Flex from '@/components/Common/Flex';
import PostCategories from '@/components/Modules/Home/PostCategories';
import Helmet from '@/components/Common/Helmet';

const HomePage: NextPage = () => {
  const { query } = useRouter();

  const category = (query?.category) as string;

  const {
    allPosts,
    filterPosts,
  } = usePosts({
    category: category === '전체' ? '' : category,
  });

  const postCategories = [
    '전체',
    ...allPosts.map(({ category }) => category),
  ];

  return (
    <>
      <Flex
        tagName='div'
        flexDirection='column'
        gap='1.5rem'
      >
        <WelcomeBlog />

        <PostCategories
          selectCategory={category || '전체'}
          categories={postCategories}
        />

        <PostList
          posts={filterPosts}
        />
      </Flex>

      <Helmet />
    </>
  );
}

export default HomePage;