import { useEffect } from 'react';
import Router from 'next/router';

import '../styles.css';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', (url) => {
      console.log(url)
      window.gtag('config', 'UA-103576314-5', {
        page_path: url,
      });
    });

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
