import { useMDXComponent } from 'next-contentlayer/hooks';

type PostContentProps = {
  code: string;
}

const PostContent = ({
  code,
}: PostContentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <div>
      <MDXComponent />
    </div>
  )
}

export default PostContent;