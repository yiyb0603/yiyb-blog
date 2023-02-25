import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: false,
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [
    Post,
  ],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default contentSource;