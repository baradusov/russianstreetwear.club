import CardList from "../components/CardList";
import Layout from "../components/Layout";
import data from "./api/data";

const Index = ({ brands }) => {
  return (
    <Layout>
      <CardList data={brands} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const indexData = data.brands.map(brand => {
    const { id, logo, name, city } = brand;
    return { id, logo, name, city };
  });

  return {
    brands: indexData
  };
};

export default Index;
