import { RefObject, useRef, useEffect } from 'react';
import { SystemTheme } from '@/enums/theme';
import { giscusSetup } from '@/libs/giscus';
import useTheme from '../theme/useTheme';

const useGiscus = <T extends HTMLElement>(giscusRef: RefObject<T>): void => {
  const { theme } = useTheme();

  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (
      giscusRef.current === null ||
      initializedRef.current ||
      theme === SystemTheme.DEFAULT
    ) {
      return;
    }

    const giscusScript = document.createElement('script');

    for (const [key, value] of Object.entries(giscusSetup)) {
      giscusScript.setAttribute(key, value);
    }

    if (theme === SystemTheme.LIGHT) {
      giscusScript.setAttribute('data-theme', 'light');
    } else {
      giscusScript.setAttribute('data-theme', 'cobalt');
    }

    giscusRef.current.append(giscusScript);

    initializedRef.current = true;
  }, [giscusRef, theme]);

  useEffect(() => {
    if (theme === SystemTheme.DEFAULT) {
      return;
    }

    const giscusIframe =
      document.querySelector<HTMLIFrameElement>('.giscus-frame');

    if (giscusIframe === null) {
      return;
    }

    giscusIframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme === SystemTheme.LIGHT ? 'light' : 'cobalt',
          },
        },
      },
      'https://giscus.app'
    );
  }, [theme]);
};

export default useGiscus;
