import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/Layout";

import { getBrand, getAllBrands } from "../lib/api";
import urlFor from "../lib/urlFor";

const Brand = ({ brand }) => {
  return (
    <Layout>
      <img
        src={urlFor(brand.logo).width(300).height(300).url()}
        alt={brand.name}
        width={200}
        height={200}
      />
      <h2 className="brand-title">{brand.name}</h2>
      {brand.city ? <p className="city">{brand.city}</p> : null}
      {brand.links ? (
        <div className="links">
          {brand.links.map(({ _id, title, url }) => {
            return (
              <a key={_id} href={url}>
                {title}
              </a>
            );
          })}
        </div>
      ) : null}
      {brand.description ? <BlockContent blocks={brand.description} /> : null}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const brand = await getBrand(params.slug);

  return {
    props: {
      brand: {
        id: brand.slug,
        name: brand.title,
        description: brand.description || null,
        logo: brand.logo,
        links: brand.links || null,
        city: brand.city || null,
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
