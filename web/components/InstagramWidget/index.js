import styles from './index.module.css';
import { useInstagramPhotos } from '../../lib/api';

const InstagramWidget = ({ instagramId }) => {
  const { photos, isLoading, isError } = useInstagramPhotos(instagramId);

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <p>Загрузка фотографий...</p>;
  }

  return (
    <ul className={styles.list}>
      {photos.map(({ id, photoUrl, postUrl }) => {
        return (
          <li key={id} className={styles.item}>
            <a className={styles.link} href={postUrl}>
              <img className={styles.photo} src={photoUrl} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default InstagramWidget;
