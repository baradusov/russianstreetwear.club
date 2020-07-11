import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";

import { getAllBrands } from "../lib/api";

const Index = ({ brands, quantity }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searhResults, setSearchResults] = useState(brands);
  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  useEffect(() => {
    const results = brands.filter(({ title, city = "" }) => {
      const brandName = title.toLowerCase();
      const brandCity = city.toLowerCase();
      return (
        brandName.includes(searchTerm.toLowerCase()) ||
        brandCity.includes(searchTerm.toLowerCase())
      );
    });

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout home={true} quantity={quantity}>
      <input
        className="search-input"
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleChange}
      />
      {searhResults.length ? (
        <CardList data={searhResults} />
      ) : (
        <p>
          В каталоге такого бренда ещё нет, но можно{" "}
          <a className="link" href="https://airtable.com/shroyJ2ZpuX4WVEIk">
            предложить добавить
          </a>{" "}
          его.
        </p>
      )}
    </Layout>
  );
};

export async function getStaticProps(context) {
  const allBrands = await getAllBrands();

  return {
    props: {
      brands: allBrands,
      quantity: allBrands.length,
    },
  };
}

export default Index;
