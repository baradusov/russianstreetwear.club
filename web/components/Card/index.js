import Link from "next/link";
import styles from "./index.module.css";
import urlFor from "../../lib/urlFor";

const Card = ({ data }) => {
  const { logo, title, slug } = data;
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
          <p className={styles.title}>{title}</p>
        </article>
      </a>
    </Link>
  );
};

export default Card;
