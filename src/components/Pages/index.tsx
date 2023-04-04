import { NextPage } from 'next';
import { useRouter } from 'next/router';
import usePosts from '@/hooks/post/usePosts';
import WelcomeBlog from '@/components/Modules/Home/WelcomeBlog';
import PostList from '@/components/Modules/Home/PostList';
import Flex from '@/components/Common/Flex';
import Helmet from '@/components/Common/Helmet';
import MobilePostCategories from '../Modules/Home/PostCategories/Mobile';
import DesktopPostCategories from '../Modules/Home/PostCategories/Desktop';
import Section from '../Common/Section';

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
    ...new Set([
      '전체',
      ...allPosts.map(({ category }) => category)
    ]),
  ];

  return (
    <>
      <Section
        tagName='div'
        maxWidth='1000px'
        margin='0 auto'
        padding='4rem 2rem'
      >
        <Flex
          tagName='div'
          gap='2rem'
          alignItems='flex-start'
        >
          <DesktopPostCategories
            selectCategory={category || '전체'}
            categories={postCategories}
          />

          <Flex
            tagName='div'
            flexDirection='column'
            gap='1.5rem'
            width='100%'
          >
            <WelcomeBlog />

            <MobilePostCategories
              selectCategory={category || '전체'}
              categories={postCategories}
            />

            <PostList
              posts={filterPosts}
            />
          </Flex>
        </Flex>

        
      </Section>
      <Helmet />
    </>
  );
}

export default HomePage;