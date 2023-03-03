import {
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticProps,
} from 'next';
import { allPosts } from '@/contentlayer/generated';
import useOnScreen from '@/hooks/utils/useOnScreen';
import Flex from '@/components/Common/Flex';
import PostTitle from '@/components/Modules/Post/PostTitle';
import PostContent from '@/components/Modules/Post/PostContent';
import PostSubInfo from '@/components/Modules/Post/PostSubInfo';
import PostComment from '@/components/Modules/Post/PostComment';
import ScrollProgressBar from '@/components/Common/ScrollProgressBar';
import Helmet from '@/components/Common/Helmet';
import PostThumbnail from '@/components/Modules/Post/PostThumbnail';
import PostShare from '../Modules/Post/PostShare';

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    intersect,
    isIntersecting,
  } = useOnScreen({
    rootMargin: '-70px 0px 0px 0px',
    defaultValue: true,
    threshold: 0,
    disable: false,
  });

  return (
    <>
      <ScrollProgressBar />

      <Flex
        tagName='div'
        flexDirection='column'
        gap='1.5rem'
        margin='0 0 1.5rem 0'
        flexRef={intersect}
      >
        <PostTitle
          title={post?.title || ''}
        />

        <PostSubInfo
          category={post?.category || ''}
          createdAt={post?.createdAt || ''}
        />

        <PostThumbnail
          thumbnail={post?.thumbnail || ''}
          alt={post?.title || ''}
        />
      </Flex>

      <PostContent
        code={post?.body.code || ''}
      />

      {
        !isIntersecting &&
        <PostShare />
      }

      <PostComment />

      <Helmet
        title={post?.title || ''}
        description={post?.description || ''}
        createdAt={post?.createdAt || ''} 
        thumbnail={post?.thumbnail || ''}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String(params?.slug || '');

  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    props: {
      post,
    },
  };
}

export default PostDetailPage;