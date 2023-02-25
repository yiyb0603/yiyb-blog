import { useRef } from 'react';
import useUtterance from '@/hooks/utterance/useUtterance';
import Section from '@/components/Common/Section';

const PostComment = (): JSX.Element => {
  const commentRef = useRef<HTMLElement>(null);

  useUtterance(commentRef);

  return (
    <Section
      tagName='section'
      sectionRef={commentRef}
      margin='6rem 0 0 0'
    ></Section>
  );
}

export default PostComment;