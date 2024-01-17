import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeHighlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';

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
    thumbnail: {
      type: 'string',
      required: true,
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
  computedFields: {
    id: {
      type: 'string',
      resolve: (post) => {
        const [_, id] = post._raw.flattenedPath.split('/');

        return id || post._raw.flattenedPath;
      },
    },

    url: {
      type: 'string',
      resolve: (post) => {
        const [_, path] = post._raw.flattenedPath.split('/');

        return `/posts/${path || post._raw.flattenedPath}`;
      },
    },

    category: {
      type: 'string',
      resolve: (post) => {
        const [category, path] = post._raw.flattenedPath.split('/');

        return path === undefined ? '기타' : category;
      },
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: ['_blank'],
          rel: ['noreferrer noopener'],
        },
      ],
      rehypeHighlight,
      rehypeAccessibleEmojis,
    ],
  },
});

export default contentSource;
