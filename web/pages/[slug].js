import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import InstagramWidget from '../components/InstagramWidget';
import CircleLink from '../components/CircleLink';

import { getBrand } from '../lib/api';
import urlFor from '../lib/urlFor';

const Brand = ({ brand }) => {
  return (
    <Layout
      title={brand.name}
      logo={urlFor(brand.logo).width(300).height(300).url()}
      description={
        brand.description ? brand.description[0].children[0].text : null
      }
    >
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

      {brand.instagramId ? (
        <InstagramWidget instagramId={brand.instagramId} />
      ) : null}

      <CircleLink link="/about" icon="&#63;" />

      <footer className="footer">
        <p>
          Если заметили ошибку, напишите, пожалуйста,{' '}
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

  return {
    props: {
      brand: {
        id: brand.slug,
        name: brand.title,
        description: brand.description || null,
        logo: brand.logo,
        links: brand.links || null,
        city: brand.city || null,
        instagramId: brand.instagramId || null,
      },
    },
    revalidate: 60 * 60 * 12, // каждые 12 часов
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Brand;
