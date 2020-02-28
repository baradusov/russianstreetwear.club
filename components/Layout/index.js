import Head from "next/head";
import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Российские бренды уличной одежды</title>
      </Head>
      <main>
        <h1 className={styles.title}>Российские бренды уличной одежды</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
