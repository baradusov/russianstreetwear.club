import styles from "./index.module.css";

const InstagramWidget = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map(({ id, photoUrl, postUrl }) => {
        return (
          <li key={id} className={styles.item}>
            <a
              className={styles.link}
              href={postUrl}
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
