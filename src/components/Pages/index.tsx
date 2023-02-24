import { NextPage } from 'next';
import usePosts from '@/hooks/post/usePosts';
import Section from '@/components/Common/Section';
import WelcomeBlog from '@/components/Modules/Home/WelcomeBlog';
import PostRowItem from '@/components/Modules/Post/PostRowItem';
import { pageRoute } from '@/libs/models/route';
import Flex from '@/components/Common/Flex';

const HomePage: NextPage = () => {
  const { posts } = usePosts();
  console.log(posts);

  return (
    <Section
      tagName='main'
    >
      <Section
        tagName='div'
        maxWidth='768px'
        padding='4rem 2rem'
        margin='0 auto'
      >
        <WelcomeBlog />

        <Flex
          tagName='div'
          margin='1rem 0 0 0'
          flexDirection='column'
        >
          {
            posts.map((post) => (
              <PostRowItem
                key={post._id}
                {...post}
                href={`${pageRoute.post}/${post._raw.flattenedPath}`}
              />
            ))
          }
        </Flex>
      </Section>
    </Section>
  );
}

export default HomePage;