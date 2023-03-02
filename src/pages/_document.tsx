import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { fontPaths } from '@/assets/fonts';
import { icons } from '@/assets/icons';
import { OS_DARK_THEME } from '@/constants/theme';
import { SystemTheme } from '@/enums/theme';
import dotenv from '@/libs/dotenv';
import { fontFamilies } from '@/styles/font';
import { palette } from '@/styles/palette';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <App {...props} />
            ),
        });
      };

      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        lang='ko'
      >
        <Head>
          <meta
            charSet='utf-8'
          />

          <meta
            httpEquiv='Content-Type'
            content='text/html; charset=utf-8'
          />

          <meta
            httpEquiv='Content-Type'
            content='text/xml; charset=utf-8'
          />

          <meta
            httpEquiv='X-UA-Compatible'
            content='IE=edge'
          />

          <meta
            name='google-site-verification'
            content={dotenv.GOOGLE_SITE_VERIFICATION_ID}
          />

          <meta
            name='naver-site-verification'
            content={dotenv.NAVER_SITE_VERIFICATION_ID}
          />

          <meta
            name='msvalidate.01'
            content={dotenv.BING_SITE_VERIFICATION_ID}
          />

          <meta
            name='referrer'
            content='no-referrer-when-downgrade'
          />

          <meta
            name='theme-color'
            content={palette.main}
          />

          <meta
            name='msapplication-TileColor'
            content={palette.main}
          />

          <link
            rel='shortcut icon'
            href={icons.FAVICON}
          />

          <meta
            property='og:type'
            content='website'
          />

          <meta
            property='og:locale'
            content='ko_KR'
          />

          <meta
            property='og:site_name'
            content='yiyb-blog'
          />

          <meta
            property='article:media_name'
            content='yiyb-blog'
          />

          <meta
            name='author'
            content='yiyb0603'
          />

          <meta
            name='apple-mobile-web-app-capable'
            content='yes'
          />

          <link
            rel='preload'
            href={fontPaths.pretendard.REGULAR}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPaths.pretendard.BOLD}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPaths.pretendard.SEMI_BOLD}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPaths.pretendard.MEDIUM}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                const value = '; ' + document.cookie;
                const parts = value.split('; ' + 'theme' + '=');
                const theme = parts.pop().split(';').shift();

                if (theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                } else {
                  const isDarkSystemTheme = window.matchMedia('${OS_DARK_THEME}').matches;

                  const systemTheme = isDarkSystemTheme ? '${SystemTheme.DARK}' : '${SystemTheme.LIGHT}';

                  document.documentElement.setAttribute('data-theme', systemTheme);
                }
              `,
            }}
          ></script>

          <script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${dotenv.GOOGLE_ANALYTICS_ID}`}
          ></script>

          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', '${dotenv.GOOGLE_ANALYTICS_ID}');
              `,
            }}
          ></script>

          <style
            dangerouslySetInnerHTML={{
              __html: fontFamilies,
            }}
          ></style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;