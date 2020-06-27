import styles from "./index.module.css";
import Card from "../Card"

const CardList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map(brand => (
        <li key={brand._id}>
          <Card data={brand} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
