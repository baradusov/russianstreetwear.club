import styles from "./index.module.css";
import Card from "../Card"

const CardList = ({ data, onClick }) => {
  return (
    <ul className={styles.list}>
      {data.map(brand => (
        <li key={brand.id}>
          <Card data={brand} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
