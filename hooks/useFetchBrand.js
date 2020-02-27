import { useEffect, useState } from "react";

const useFetchBrand = id => {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const getBrand = async () => {
      const result = await fetch(`/api/brands?id=${id}`);
      const brand = await result.json();

      setBrand(brand);
    };

    getBrand();
  }, [id]);

  return brand;
};

export default useFetchBrand;
