import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";

import { getAllBrands } from "../lib/api";

const Index = ({ brands }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searhResults, setSearchResults] = useState([]);
  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  useEffect(() => {
    const results = brands.filter(({ title }) => {
      const brandName = title.toLowerCase();
      return brandName.includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout home={true}>
      <input
        className="search-input"
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleChange}
      />
      <CardList data={searhResults} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const allBrands = await getAllBrands();

  return {
    props: {
      brands: allBrands,
    },
  };
}

export default Index;
