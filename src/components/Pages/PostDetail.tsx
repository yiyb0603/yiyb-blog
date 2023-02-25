import {
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';
import { allPosts } from '@/contentlayer/generated';
import Section from '@/components/Common/Section';
import PostTitle from '@/components/Modules/Post/PostTitle';
import PostContent from '@/components/Modules/Post/PostContent';
import Utterances from '../Modules/Utterances';

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Section
      tagName='main'
    >
      <Section
        tagName='div'
        maxWidth='768px'
        margin='0 auto'
        padding='6rem 2rem'
      >
        <PostTitle
          title={post?.title || ''}
        />

        <PostContent
          code={post?.body.code || ''}
        />

        <Utterances />
      </Section>
    </Section>
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

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
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

export default PostDetailPage;