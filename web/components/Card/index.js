import Link from "next/link";
import styles from "./index.module.css";

const Card = ({ data }) => {
  const { logo, title, slug } = data;
  const brandImage = logo ? logo : "/logos/no-image.png";

  return (
    <Link href="/brands/[slug]" as={`/brands/${slug}`}>
      <a>
        <article className={styles.item}>
          <img
            className={styles.logo}
            src={brandImage}
            alt={name}
            width={200}
            height={200}
          />
          <p className={styles.title}>{title}</p>
        </article>
      </a>
    </Link>
  );
};

export default Card;
