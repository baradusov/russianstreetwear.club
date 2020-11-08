import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.css';
import declension from '../../lib/declension';

const Layout = ({ title, description, children, home, quantity, logo }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} |` : ''} Российские бренды уличной одежды
        </title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Каталог российских брендов уличной одежды.'
          }
        ></meta>

        <meta
          property="og:site_name"
          content="Российские бренды уличной одежды"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru" />
        <meta property="og:url" content="https://russianstreetwear.club/" />
        <meta
          property="og:description"
          content="Каталог российских брендов уличной одежды."
        />
        {title ? (
          <>
            <meta
              property="og:title"
              content={`${title} | Российские бренды уличной одежды`}
            />
            <meta
              property="og:image"
              content={`https://og-image-lemon.vercel.app/${title}.png?md=1&widths=300&heights=300&images=${logo}`}
            ></meta>
          </>
        ) : (
          <>
            <meta
              property="og:title"
              content="Российские бренды уличной одежды"
            />
            <meta
              property="og:image"
              content="https://og-image-lemon.vercel.app/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D1%8B%3Cbr/%3E%D1%83%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B.png?md=1&fontSize=125px"
            ></meta>
          </>
        )}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-103576314-5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-103576314-5');",
          }}
        ></script>
      </Head>
      <main>
        {home ? (
          <h1 className={styles.title}>Российские бренды уличной одежды</h1>
        ) : (
          <h1 className={styles.title}>
            <Link href="/">
              <a>Российские бренды уличной одежды</a>
            </Link>
          </h1>
        )}
        {children}
      </main>
      {home ? (
        <footer className={styles.footer}>
          <p>
            В каталоге — {quantity}{' '}
            {declension('бренд', 'брендов', 'бренда', quantity)}
          </p>
        </footer>
      ) : null}
    </>
  );
};

export default Layout;
