import { RefObject } from 'react';
import styled from 'styled-components';
import { useMDXComponent } from 'next-contentlayer/hooks';

type PostContentProps = {
  postContentRef: RefObject<HTMLDivElement>;
  code: string;
}

const PostContent = ({
  postContentRef,
  code,
}: PostContentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <PostContentContainer
      ref={postContentRef}
    >
      <MDXComponent />
    </PostContentContainer>
  );
}

const PostContentContainer = styled.section`
  h1 {
    margin: 2rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.LARGE};
  }

  h2,
  h3,
  h4 {
    margin: 2rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.EXTRA_BIG};
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
    font-family: ${({ theme }) => theme.fontFamily.pretendard.BOLD};
    color: ${({ theme }) => theme.color.main};
    line-height: 1.6;
    word-break: break-all;
  }

  p,
  li,
  span,
  code {
    white-space: pre-wrap;
    word-break: keep-all;
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  }

  ul {
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }

  li {
    margin-left: 2rem;
  }

  code:not([data-language]) {
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    padding: 0.5rem 0.75rem;
    margin-right: 0.25rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.5rem auto;
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