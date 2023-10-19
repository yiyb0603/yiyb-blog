import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { images } from '@/assets/images';
import dotenv from '@/libs/dotenv';
import generateFullURL from '@/utils/string/generateFullURL';
import isEmpty from '@/utils/is-packages/isEmpty';

type HelmetProps = {
  title?: string;
  description?: string;
  thumbnail?: string;
  createdAt?: string | null;
  noIndex?: boolean;
  children?: ReactNode;
};

const Helmet = ({
  title = 'yiyb-blog',
  description = '권용빈의 개인 블로그',
  thumbnail = images.opengraph.BASE,
  createdAt = null,
  noIndex = false,
  children,
}: HelmetProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Head>
      <link
        rel='canonical'
        href={generateFullURL(asPath)}
      />

      <meta
        name='title'
        content={title}
      />

      <meta
        name='description'
        content={description}
      />

      <meta
        property='og:title'
        content={title}
      />

      <meta
        property='og:description'
        content={description}
      />

      <meta
        property='og:image'
        content={thumbnail}
      />

      <meta
        property='og:url'
        content={generateFullURL(asPath)}
      />

      <meta
        name='twitter:title'
        content={title}
      />

      <meta
        name='twitter:description'
        content={description}
      />

      <meta
        property='twitter:url'
        content={generateFullURL(asPath)}
      />

      <meta
        name='twitter:image'
        content={thumbnail}
      />

      <meta
        name='twitter:card'
        content='summary_large_image'
      />

      {!isEmpty(createdAt) && (
        <>
          <meta
            property='article:published_time'
            content={dayjs(createdAt).format('YYYY-MM-DDTHH:mm:ss')}
          />

          <meta
            property='og:regDate'
            content={dayjs(createdAt).format('YYYYMMDDHHmmss')}
          />
        </>
      )}

      <meta
        property='article:pc_url'
        content={generateFullURL(asPath)}
      />

      <meta
        property='article:pc_view_url'
        content={generateFullURL(asPath)}
      />

      <meta
        property='article:pc_service_home'
        content={dotenv.APP_URL}
      />

      <meta
        property='article:mobile_url'
        content={generateFullURL(asPath)}
      />

      <meta
        property='article:mobile_view_url'
        content={generateFullURL(asPath)}
      />

      <meta
        property='article:mobile_service_home'
        content={dotenv.APP_URL}
      />

      {noIndex && (
        <meta
          property='robots'
          content='noindex'
        />
      )}

      {children}

      <title>{title}</title>
    </Head>
  );
};

export default Helmet;
