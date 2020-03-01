import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { server } from "../config";

const Index = ({ brands }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searhResults, setSearchResults] = useState([]);
  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  useEffect(() => {
    const results = brands.filter(({ name }) => {
      const brandName = name.toLowerCase();
      return brandName.includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout>
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

Index.getInitialProps = async () => {
  const response = await fetch(`${server}/api/brands`);
  const data = await response.json();

  const indexData = data.default.brands.map(brand => {
    const { id, logo, name, city } = brand;
    return { id, logo, name, city };
  });

  return {
    brands: indexData
  };
};

export default Index;
