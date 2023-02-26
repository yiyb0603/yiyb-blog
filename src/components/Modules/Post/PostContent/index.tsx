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

const PostContentContainer = styled.section`
  h1 {
    margin: 1.5rem 0;
    font-size: ${({ theme }) => theme.fontSize.LARGE};
  }

  h2,
  h3,
  h4 {
    margin: 1.5rem 0;
    font-size: ${({ theme }) => theme.fontSize.EXTRA_BIG};
  }

  a {
    font-family: ${({ theme }) => theme.fontFamily.pretendard.BOLD};
    color: ${({ theme }) => theme.color.main};
  }

  p,
  li,
  span,
  code,
  a {
    white-space: pre-wrap;
    word-break: break-all;
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  }

  img {
    width: 100%;
    margin: 1.5rem 0;
  }

  pre {
    width: 100%;
    margin: 1.5rem 0;
    word-break: break-all;
    overflow: auto;
    padding: 1.5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.codeTheme};
  }

  blockquote {
    margin: 1.5rem 0;
    padding: 2rem;
    border-left: ${({ theme }) => `5px solid ${theme.color.main}`};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }
`;

export default PostContent;