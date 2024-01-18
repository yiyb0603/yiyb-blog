import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react';
import GlobalStyle from '@/styles/GlobalStyle';
import { RootState } from '@/stores';
import { createNextStore } from '@/stores/nextStore';
import Dialog from '@/components/Common/Dialog';
import UserTemplate from '@/components/Templates/UserTemplate';
import StyleProvider from '@/components/Providers/StyleProvider';

type WrapperProps = {
  children: ReactNode;
};

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'> & {
  preloadedState?: Partial<RootState>;
  store?: Store;
};

export const customRender = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = createNextStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <StyleProvider>
          <UserTemplate>{children}</UserTemplate>

          <Dialog />

          <GlobalStyle />
        </StyleProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { customRender as render };
