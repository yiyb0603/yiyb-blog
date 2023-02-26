import { Provider as ReduxProvider } from 'react-redux';
import { NextComponentType } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { wrapper } from '@/stores/nextStore';
import GlobalStyle from '@/styles/GlobalStyle';
import StyleProvider from '@/components/Providers/StyleProvider';
import UserTemplate from '@/components/Templates/UserTemplate';

type MyAppProps = AppProps & {};

type CustomAppComponent = NextComponentType<AppContext, AppInitialProps, MyAppProps>;

const MyApp: CustomAppComponent = ({
  Component,
  pageProps,
  ...reduxProps
}) => {
  const {
    store,
  } = wrapper.useWrappedStore(reduxProps)

  return (
    <ReduxProvider
      store={store}
    >
      <StyleProvider>
        <UserTemplate>
          <Component
            {...pageProps}
          />
        </UserTemplate>

        <GlobalStyle />
      </StyleProvider>
    </ReduxProvider>
  );
}

export default MyApp;