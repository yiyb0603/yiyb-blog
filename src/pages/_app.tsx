import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';

type MyAppProps = AppProps & {};

type CustomAppComponent = NextComponentType<AppContext, AppInitialProps, MyAppProps>;

const MyApp: CustomAppComponent = ({
  Component,
  pageProps,
}) => {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;