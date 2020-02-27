import styles from "./index.module.css";
import Card from "../Card"

const CardList = ({ data, onClick }) => {
  return (
    <ul className={styles.list}>
      {data.map(brand => (
        <Card key={brand.id} data={brand} onClick={onClick} />
      ))}
    </ul>
  );
};

export default CardList;
