import CardList from "../components/CardList";
import data from "./api/data";

const Index = ({ brands }) => {

  return (
    <main>
      <h1>Российские бренды уличной одежды</h1>
      <CardList data={brands} />
    </main>
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
