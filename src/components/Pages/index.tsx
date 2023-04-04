import { NextPage } from 'next';
import { useRouter } from 'next/router';
import usePosts from '@/hooks/post/usePosts';
import WelcomeBlog from '@/components/Modules/Home/WelcomeBlog';
import PostList from '@/components/Modules/Home/PostList';
import Flex from '@/components/Common/Flex';
import Helmet from '@/components/Common/Helmet';
import MobilePostCategories from '../Modules/Home/PostCategories/Mobile';
import DesktopPostCategories from '../Modules/Home/PostCategories/Desktop';
import StickyContents from '../Modules/Home/StickyContents';
import Section from '../Common/Section';

const HomePage: NextPage = () => {
  const { query } = useRouter();

  const category = (query?.category || '전체') as string;

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
        maxWidth='1200px'
        margin='0 auto'
        padding='4rem 2rem'
      >
        <Flex
          tagName='div'
          gap='3rem'
          flexWrap='wrap'
          alignItems='flex-start'
        >
          <DesktopPostCategories
            selectCategory={category}
            categories={postCategories}
          />

          <Flex
            tagName='div'
            flex='3.5'
            gap='2.5rem'
            flexDirection='column'
            width='100%'
          >
            <Flex
              tagName='div'
              gap='1.5rem'
              flexDirection='column'
            >
              <WelcomeBlog />

              <MobilePostCategories
                selectCategory={category}
                categories={postCategories}
              />
            </Flex>

            <PostList
              category={category === '전체' ? 'All Posts' : category}
              posts={filterPosts}
            />
          </Flex>

          <StickyContents />
        </Flex>
      </Section>

      <Helmet />
    </>
  );
}

export default HomePage;