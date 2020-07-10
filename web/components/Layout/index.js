import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";
import declension from "../../lib/declension";

const Layout = ({ children, home, quantity }) => {
  return (
    <>
      <Head>
        <title>Российские бренды уличной одежды</title>
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
            В каталоге — {quantity}{" "}
            {declension("бренд", "брендов", "бренда", quantity)}
          </p>
        </footer>
      ) : null}
    </>
  );
};

export default Layout;
