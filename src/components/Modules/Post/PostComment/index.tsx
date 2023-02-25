import { useRef } from 'react';
import useUtterance from '@/hooks/utterance/useUtterance';

const PostComment = (): JSX.Element => {
  const commentRef = useRef<HTMLElement>(null);

  useUtterance(commentRef);

  return (
    <section
      ref={commentRef}
    ></section>
  );
}

export default PostComment;