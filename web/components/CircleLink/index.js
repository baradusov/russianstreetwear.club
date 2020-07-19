import Link from "next/link";
import styles from "./index.module.css";

const CircleLink = ({link, icon}) => (
  <Link href={link}>
      <a className={styles.circleLink}>{icon}</a>
  </Link>
);

export default CircleLink;
