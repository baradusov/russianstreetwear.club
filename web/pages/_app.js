import { useEffect } from 'react';
import Router from 'next/router';
import '../styles.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Router.events.on('routeChangeComplete', (url) => {
        window.gtag('config', 'UA-103576314-5', {
          page_path: url,
        });
      });
    }

    return () => {
      Router.events.off('routeChangeComplete', (url) => {
        window.gtag('config', 'UA-103576314-5', {
          page_path: url,
        });
      });
    };
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
