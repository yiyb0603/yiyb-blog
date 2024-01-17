import { useState } from 'react';
import { GetStaticPaths, InferGetStaticPropsType, GetStaticProps } from 'next';
import { Post } from '@/contentlayer/generated';
import { allPosts } from '@/utils/contentlayer';
import Flex from '@/components/Common/Flex';
import PostTitle from '@/components/Modules/Post/PostTitle';
import PostContent from '@/components/Modules/Post/PostContent';
import PostSubInfo from '@/components/Modules/Post/PostSubInfo';
import PostComment from '@/components/Modules/Post/PostComment';
import ScrollProgressBar from '@/components/Common/ScrollProgressBar';
import Helmet from '@/components/Common/Helmet';
import PostThumbnail from '@/components/Modules/Post/PostThumbnail';
import PostShare from '@/components/Modules/Post/PostShare';
import PostToc from '@/components/Modules/Post/PostToc';
import PrevNextPost from '../Modules/Post/PrevNextPost';
import Section from '../Common/Section';

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [postElement, setPostElement] = useState<HTMLElement | null>(null);

  const currentPostIndex = allPosts.findIndex(({ id }) => id === post?.id);

  // 최신순으로 정렬되므로 prevPost는 인덱스 + 1
  const prevPost = allPosts[currentPostIndex + 1];
  const nextPost = allPosts[currentPostIndex - 1];

  return (
    <Section
      tagName='div'
      maxWidth='768px'
      position='relative'
      margin='0 auto'
      padding='4rem 2rem'
    >
      <ScrollProgressBar />

      <Flex
        tagName='div'
        flexDirection='column'
        gap='1.5rem'
        margin='0 0 1.5rem 0'
      >
        <PostTitle title={post?.title || ''} />

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
        postContentRef={setPostElement}
        code={post?.body.code || ''}
      />

      <PostToc
        postId={post?._id || ''}
        postElement={postElement}
      />

      <PostShare />

      <PrevNextPost
        prev={prevPost}
        next={nextPost}
      />

      <PostComment />

      <Helmet
        title={post?.title || ''}
        description={post?.description || ''}
        createdAt={post?.createdAt || ''}
        thumbnail={post?.thumbnail || ''}
      />
    </Section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ id }) => ({
      params: {
        slug: id,
      },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post | undefined;
}> = async ({ params }) => {
  const postId = String(params?.slug || '');

  const post = allPosts.find(({ id }) => {
    return id === postId;
  });

  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
