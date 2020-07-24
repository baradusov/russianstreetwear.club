import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/Layout";
import InstagramWidget from "../components/InstagramWidget";
import CircleLink from "../components/CircleLink";

import { getBrand, getAllBrands, getInstagramPhotos } from "../lib/api";
import urlFor from "../lib/urlFor";

const Brand = ({ brand }) => {
  return (
    <Layout title={brand.name}>
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
          {brand.links.map(({ _key, title, url }) => {
            return (
              <a key={_key} href={url}>
                {title}
              </a>
            );
          })}
        </div>
      ) : null}

      {brand.description ? (
        <div className="blockContent">
          <BlockContent blocks={brand.description} />
        </div>
      ) : null}

      {brand.instagramPhotos ? (
        <InstagramWidget data={brand.instagramPhotos} />
      ) : null}

      <CircleLink link="/about" icon="&#63;" />

      <footer className="footer">
        <p>
          Если заметили ошибку, напишите, пожалуйста,{" "}
          <a className="link" href="https://t.me/baradusov">
            в телеграм
          </a>
          .
        </p>
      </footer>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const brand = await getBrand(params.slug);
  const instagramPhotos = await getInstagramPhotos(brand.instagramId);

  return {
    props: {
      brand: {
        id: brand.slug,
        name: brand.title,
        description: brand.description || null,
        logo: brand.logo,
        links: brand.links || null,
        city: brand.city || null,
        instagramPhotos: instagramPhotos || null,
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
