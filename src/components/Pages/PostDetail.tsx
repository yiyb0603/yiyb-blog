import {
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';
import { allPosts } from '@/contentlayer/generated';
import Flex from '@/components/Common/Flex';
import PostTitle from '@/components/Modules/Post/PostTitle';
import PostContent from '@/components/Modules/Post/PostContent';
import PostSubInfo from '@/components/Modules/Post/PostSubInfo';
import PostComment from '@/components/Modules/Post/PostComment';
import ScrollProgressBar from '@/components/Common/ScrollProgressBar';
import Helmet from '@/components/Common/Helmet';
import { wrapper } from '@/stores/nextStore';

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ScrollProgressBar />

      <Flex
        tagName='div'
        flexDirection='column'
        gap='1.5rem'
        margin='0 0 1.5rem 0'
      >
        <PostTitle
          title={post?.title || ''}
        />

        <PostSubInfo
          category={post?.category || ''}
          createdAt={post?.createdAt || ''}
        />
      </Flex>

      <PostContent
        code={post?.body.code || ''}
      />

      <PostComment />

      <Helmet
        title={post?.title || ''}
        description={post?.description || ''}
        createdAt={post?.createdAt || ''}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        slug: _raw.flattenedPath,
      },
    })),

    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps(() => {
  return async ({ params }: GetStaticPropsContext) => {
    const postId = String(params?.slug || '');
  
    const post = allPosts.find(({ _raw }) => {
      return _raw.flattenedPath === postId;
    });
  
    return {
      props: {
        post,
      },
    };
  };
});

export default PostDetailPage;