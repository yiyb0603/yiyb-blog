import Image from '@/components/Common/Image';

type PostThumbnailProps = {
  alt: string;
  thumbnail: string;
};

const PostThumbnail = ({ alt, thumbnail }: PostThumbnailProps): JSX.Element => {
  return (
    <Image
      src={thumbnail}
      alt={alt}
      width='100%'
      borderRadius='5px'
    />
  );
};

export default PostThumbnail;
