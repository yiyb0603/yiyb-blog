import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Home() {
  const MDXComponent = useMDXComponent(allPosts[0].body.code);

  return (
    <MDXComponent />
  );
}
