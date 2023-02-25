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
import { fontFamilies } from '@/styles/font';
import { OS_DARK_THEME } from '@/constants/theme';
import { SystemTheme } from '@/enums/theme';

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
            name='referrer'
            content='no-referrer-when-downgrade'
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