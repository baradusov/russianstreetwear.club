import React from "react";
import ReactDOM from "react-dom";
import useFetchBrand from "../../hooks/useFetchBrand";
import styles from "./index.module.css";

const Modal = ({ isShowing, setIsShowing, brandId }) => {
  if (isShowing === false) return null;

  const brand = useFetchBrand(brandId);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      {brand === null ? (
        <p>{"Loading..."}</p>
      ) : (
        <>
          <p>{brand.name}</p>
          <p>{brand.summary}</p>
          <button onClick={() => setIsShowing(false)}>Close</button>
        </>
      )}
    </div>,
    document.body
  );
};

export default Modal;
