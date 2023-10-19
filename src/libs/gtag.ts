import { NextWebVitalsMetric } from 'next/app';

const gtag = {
  reportWebVitals: ({ id, label, name, value }: NextWebVitalsMetric): void => {
    window.gtag('event', name, {
      event_label: id,
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  },
};

export default gtag;
