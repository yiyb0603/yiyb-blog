import { Ref } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styled from 'styled-components';
import CustomTable from '@/components/Common/Table';

type PostContentProps = {
  postContentRef: Ref<HTMLDivElement>;
  code: string;
};

const PostContent = ({ postContentRef, code }: PostContentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <PostContentContainer ref={postContentRef}>
      <MDXComponent
        components={{
          table: ({ children }) => <CustomTable>{children}</CustomTable>,
        }}
      />
    </PostContentContainer>
  );
};

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
    line-height: 1.7;
    word-break: break-all;
  }

  p {
    white-space: pre-wrap;
  }

  p,
  li,
  span,
  code {
    word-break: keep-all;
    line-height: 1.8;
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  }

  ol,
  ul {
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.color.border2}`};
    background-color: ${({ theme }) => theme.color.main50};
  }

  li {
    margin-left: 2rem;
    color: ${({ theme }) => theme.color.black};
  }

  code:not([data-language]) {
    padding: 0.25rem 0.75rem;
    margin-right: 0.25rem;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    color: ${({ theme }) => theme.color.main800};
    background-color: ${({ theme }) => theme.color.main50};
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.5rem auto;
  }

  th {
    text-align: start;
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    border: ${({ theme }) => `1px solid ${theme.color.border3}`};
    background-color: ${({ theme }) => theme.color.background3};
  }

  td {
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    border: ${({ theme }) => `1px solid ${theme.color.border3}`};
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

    &::-webkit-scrollbar {
      width: 100%;
      height: 7.5px;
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.color.background3};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.color.main};
    }
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
