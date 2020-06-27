import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";

const Layout = ({ children, home }) => {
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
    </>
  );
};

export default Layout;
