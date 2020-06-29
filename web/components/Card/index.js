import Link from "next/link";
import styles from "./index.module.css";
import urlFor from "../../lib/urlFor";

const Card = ({ data }) => {
  const { logo, title, city, slug } = data;
  const brandImage = logo ? logo : "/logos/no-image.png";

  return (
    <Link href="/brands/[slug]" as={`/brands/${slug}`}>
      <a className={styles.link}>
        <article className={styles.item}>
          <img
            className={styles.logo}
            src={urlFor(brandImage).width(300).height(300).url()}
            alt={name}
          />
          <h2 className={styles.title}>{title}</h2>
          {city ? <p className={styles.city}>{city}</p> : null}
        </article>
      </a>
    </Link>
  );
};

export default Card;
