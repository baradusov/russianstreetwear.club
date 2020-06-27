import BlockContent from "@sanity/block-content-to-react";

import Layout from "../../components/Layout";

import { getBrand, getAllBrands } from "../../lib/api";
import urlFor from "../../lib/urlFor";

const Brand = ({ brand }) => {
  return (
    <Layout>
      <img
        src={urlFor(brand.logo).width(300).height(300).url()}
        alt={brand.name}
        width={200}
        height={200}
      />
      <h2>{brand.name}</h2>
      {brand.links ? (
        <div className="links">
          {brand.links.map(({ _id, title, url }) => {
            return <a key={_id} href={url}>{title}</a>;
          })}
        </div>
      ) : null}
      <BlockContent blocks={brand.description} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug, title, description, logo, links = null } = await getBrand(
    params.slug
  );

  return {
    props: {
      brand: {
        id: slug,
        name: title,
        description: description,
        logo: logo,
        links: links,
      },
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
