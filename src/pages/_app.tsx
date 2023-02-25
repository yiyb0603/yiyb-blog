import { Provider as ReduxProvider } from 'react-redux';
import { NextComponentType } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import cookies from 'next-cookies';
import { wrapper } from '@/stores/nextStore';
import GlobalStyle from '@/styles/GlobalStyle';
import StyleProvider from '@/components/Providers/StyleProvider';
import UserTemplate from '@/components/Templates/UserTemplate';
import { SystemTheme } from '@/enums/theme';
import { themeAction } from '@/stores/theme';

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

MyApp.getInitialProps = wrapper.getInitialAppProps(({
  dispatch,
}) => {
  return async (context) => {
    const { ctx } = context;
  
    const {
      theme,
    } = cookies(ctx);

    switch (theme) {
      case SystemTheme.LIGHT:
        dispatch(themeAction.changeTheme(SystemTheme.LIGHT));
        break;

      case SystemTheme.DARK:
        dispatch(themeAction.changeTheme(SystemTheme.DARK));
        break;
    }
  
    const appContext = await App.getInitialProps(context);
  
    return appContext;
  }
});

export default MyApp;