import { Provider as ReduxProvider } from 'react-redux';
import { NextComponentType } from 'next';
import App, {
  AppContext,
  AppInitialProps,
  AppProps,
  NextWebVitalsMetric,
} from 'next/app';
import dynamic from 'next/dynamic';
import gtag from '@/libs/gtag';
import { wrapper } from '@/stores/nextStore';
import GlobalStyle from '@/styles/GlobalStyle';
import StyleProvider from '@/components/Providers/StyleProvider';
import UserTemplate from '@/components/Templates/UserTemplate';

const Dialog = dynamic(() => import('@/components/Common/Dialog'));

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

        <Dialog />

        <GlobalStyle />        
      </StyleProvider>
    </ReduxProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  return await App.getInitialProps(context);
}

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  gtag.reportWebVitals(metric);
}

export default MyApp;