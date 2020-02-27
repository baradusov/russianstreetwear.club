import { useState } from "react";
import fetch from "isomorphic-unfetch";
import Modal from "../components/Modal";

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
  return {
    brands: [
      {
        id: 0,
        name: "Волчок"
      },
      {
        id: 1,
        name: "Меч"
      },
      {
        id: 2,
        name: "g o l d m a n s"
      },
      {
        id: 3,
        name: "Anteater"
      }
    ]
  };
};

export default Index;
