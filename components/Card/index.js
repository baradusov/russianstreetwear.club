import { useState, useEffect } from "react";
import Modal from "../Modal";
import styles from "./index.module.css";

const Card = ({ data }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [brandId, setBrandId] = useState({});

  const showModal = id => {
    setIsShowing(true);
    setBrandId(id);
  };

  useEffect(() => {
    isShowing
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [isShowing]);

  const { id, logo, name } = data;
  const brandImage = logo ? logo : "/logos/no-image.png";

  return (
    <>
      <li className={styles.item} onClick={() => showModal(id)}>
        <img
          className={styles.logo}
          src={brandImage}
          alt={name}
          width={200}
          height={200}
        />
        <p className={styles.title}>{name}</p>
      </li>

      <Modal
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        brandId={brandId}
      />
    </>
  );
};

export default Card;
