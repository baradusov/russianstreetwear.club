import React from "react";
import ReactDOM from "react-dom";
import useFetchBrand from "../../hooks/useFetchBrand";
import styles from "./index.module.css";

const Modal = ({ isShowing, setIsShowing, brandId }) => {
  if (isShowing === false) return null;

  const brand = useFetchBrand(brandId);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={() => setIsShowing(false)}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {brand === null ? (
          <p>{"Загрузка..."}</p>
        ) : (
          <>
            <h2 className={styles.title}>{brand.name}</h2>
            <p className={styles.description}>{brand.summary}</p>
            <button
              className={styles.close}
              onClick={() => setIsShowing(false)}
              aria-label="Закрыть"
            >
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                version="1"
                viewBox="0 0 20 20"
              >
                <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
              </svg>
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
