import Layout from "../../components/Layout";

import { getBrand, getAllBrands } from "../../lib/api";

const Brand = ({ brand }) => {
  return (
    <Layout>
      <h2>{brand.name}</h2>
      <p>{brand.id}</p>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug, title } = await getBrand(params.slug);
  
  return {
    props: {
      brand: { id: slug, name: title },
    },
  };
}

export async function getStaticPaths() {
  const allBrands = await getAllBrands();

  return {
    paths: allBrands.map((brand) => {
      return {
        params: {
          slug: brand.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Brand;
