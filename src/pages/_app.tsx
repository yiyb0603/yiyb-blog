import { Provider as ReduxProvider } from 'react-redux';
import { NextComponentType } from 'next';
import App, {
  AppContext,
  AppInitialProps,
  AppProps,
  NextWebVitalsMetric,
} from 'next/app';
import dynamic from 'next/dynamic';
import cookies from 'next-cookies';
import { SystemTheme } from '@/enums/theme';
import gtag from '@/libs/gtag';
import isEmpty from '@/utils/is-packages/isEmpty';
import { wrapper } from '@/stores/nextStore';
import { userAction } from '@/stores/user';
import { themeAction } from '@/stores/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import StyleProvider from '@/components/Providers/StyleProvider';
import UserTemplate from '@/components/Templates/UserTemplate';

const Dialog = dynamic(() => import('@/components/Common/Dialog'), {
  ssr: false,
});

type MyAppProps = AppProps & {};

type CustomAppComponent = NextComponentType<
  AppContext,
  AppInitialProps,
  MyAppProps
>;

const MyApp: CustomAppComponent = ({ Component, pageProps, ...reduxProps }) => {
  const { store } = wrapper.useWrappedStore(reduxProps);

  return (
    <ReduxProvider store={store}>
      <StyleProvider>
        <UserTemplate>
          <Component {...pageProps} />
        </UserTemplate>

        <Dialog />

        <GlobalStyle />
      </StyleProvider>
    </ReduxProvider>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps(({ dispatch }) => {
  return async (context) => {
    const { ctx } = context;
    const { theme } = cookies(ctx);

    const userAgent = ctx?.req?.headers['user-agent'] || '';

    dispatch(userAction.setUserAgent(userAgent));

    if (!isEmpty(theme)) {
      dispatch(themeAction.changeTheme(theme as SystemTheme));
    }

    return await App.getInitialProps(context);
  };
});

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  gtag.reportWebVitals(metric);
};

export default MyApp;
