import { useMDXComponent } from 'next-contentlayer/hooks';
import styled from 'styled-components';

type PostContentProps = {
  code: string;
}

const PostContent = ({
  code,
}: PostContentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <PostContentContainer>
      <MDXComponent />
    </PostContentContainer>
  );
}

const PostContentContainer = styled.div`
  img {
    width: 100%;
    margin: 1rem 0;
  }

  pre {
    width: 100%;
    margin: 1rem 0;
    word-break: break-all;
    overflow: auto;
    padding: 1.5rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.black};
  }

  h1 {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.LARGE};
  }

  h2,
  h3,
  h4 {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.EXTRA_BIG};
  }

  ol {
    margin: 1rem 0;
  }

  p,
  li,
  span {
    white-space: pre-wrap;
    word-break: break-all;
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
  }

  blockquote {
    margin: 1rem 0;
    padding: 1.5rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }
`;

export default PostContent;