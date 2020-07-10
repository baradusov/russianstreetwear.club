import Link from "next/link";
import styles from "./index.module.css";

const InstagramWidget = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map(({ photoUrl, postShortCode }) => {
        return (
          <li key={postShortCode} className={styles.item}>
            <a
              className={styles.link}
              href={`https://instagram.com/p/${postShortCode}`}
            >
              <img className={styles.photo} src={photoUrl} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default InstagramWidget;
