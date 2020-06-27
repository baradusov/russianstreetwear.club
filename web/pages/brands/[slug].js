import BlockContent from "@sanity/block-content-to-react";

import Layout from "../../components/Layout";

import { getBrand, getAllBrands } from "../../lib/api";

const Brand = ({ brand }) => {
  return (
    <Layout>
      <img
        src={brand.logo}
        alt={brand.name}
        width={200}
        height={200}
      />
      <h2>{brand.name}</h2>
      <BlockContent blocks={brand.description} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug, title, description, logo } = await getBrand(params.slug);

  return {
    props: {
      brand: { id: slug, name: title, description: description, logo: logo },
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
