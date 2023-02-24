import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { wrapper } from '@/stores/nextStore';
import GlobalStyle from '@/styles/GlobalStyle';
import StyleProvider from '@/components/Providers/StyleProvider';

type MyAppProps = AppProps & {};

type CustomAppComponent = NextComponentType<AppContext, AppInitialProps, MyAppProps>;

const MyApp: CustomAppComponent = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>

      <GlobalStyle />
    </>
  );
}

export default wrapper.withRedux(MyApp);