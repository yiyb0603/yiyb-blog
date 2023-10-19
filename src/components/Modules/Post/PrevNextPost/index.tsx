import { Post } from '@/contentlayer/generated';
import Flex from '@/components/Common/Flex';
import SimplePostItem from './SimplePostItem';

type PrevNextPostProps = {
  prev: Post | undefined;
  next: Post | undefined;
};

const PrevNextPost = ({ prev, next }: PrevNextPostProps): JSX.Element => {
  return (
    <Flex
      tagName='section'
      gap='1.5rem'
      flexDirection='column'
      margin='2rem 0 0 0'
    >
      {prev !== undefined && (
        <SimplePostItem
          {...prev}
          itemType='PREV'
        />
      )}

      {next !== undefined && (
        <SimplePostItem
          {...next}
          itemType='NEXT'
        />
      )}
    </Flex>
  );
};

export default PrevNextPost;
