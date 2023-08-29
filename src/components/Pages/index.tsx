import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PER_PAGE_COUNT } from '@/constants/post';
import usePosts from '@/hooks/post/usePosts';
import WelcomeBlog from '@/components/Modules/Home/WelcomeBlog';
import PostList from '@/components/Modules/Home/PostList';
import Flex from '@/components/Common/Flex';
import Helmet from '@/components/Common/Helmet';
import MobilePostCategories from '../Modules/Home/PostCategories/Mobile';
import DesktopPostCategories from '../Modules/Home/PostCategories/Desktop';
import StickyContents from '../Modules/Home/StickyContents';
import Section from '../Common/Section';
import Pagination from '../Common/Pagination';

const HomePage: NextPage = () => {
  const {
    query,
    push,
  } = useRouter();

  const category = (query?.category || '전체') as string;
  const currentPage = Number(query?.page || 1);

  const {
    filterPosts,
    chunkPosts,
    categories,
  } = usePosts({
    category: category === '전체' ? '' : category,
  });

  const handlePageClick = (page: number): void => {
    push({
      query: {
        ...query,
        page,
      },
    }, undefined, {
      scroll: true,
      shallow: true,
    });
  }

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
            categories={categories}
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
                categories={categories}
              />
            </Flex>

            <PostList
              category={category === '전체' ? 'All Posts' : category}
              posts={chunkPosts[currentPage - 1] || []}
              postsCount={filterPosts.length}
            />

            <Pagination
              currentPage={currentPage}
              perPage={PER_PAGE_COUNT}
              totalPages={Math.ceil(filterPosts.length / PER_PAGE_COUNT)}
              hiddenOnSinglePage
              onPageClick={handlePageClick}
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