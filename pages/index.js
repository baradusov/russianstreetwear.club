import { useState } from "react";
import Modal from "../components/Modal";
import data from './api/data.json';

const Index = ({ brands }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [brandId, setBrandId] = useState({});

  const showModal = id => {
    setIsShowing(true);
    setBrandId(id);
  };

  return (
    <>
      <ul>
        {brands.map(brand => (
          <li key={brand.id} onClick={() => showModal(brand.id)}>
            <p>{brand.name}</p>
          </li>
        ))}
      </ul>

      <Modal
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        brandId={brandId}
      />
    </>
  );
};

Index.getInitialProps = async () => {
  return data;
};

export default Index;
