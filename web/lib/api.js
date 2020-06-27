import sanity from "./client";

const brandFileds = `
    _id,
    title,
    'logo': logo.asset->url,
    'slug': slug.current
`;

export async function getBrand(slug) {
  const data = await sanity.fetch(
    `*[_type == 'brand' && slug.current == $slug] | order(date desc){
      ${brandFileds},
      description
    }`,
    { slug }
  );

  return data[0];
}

export async function getAllBrands() {
  const data = await sanity.fetch(
    `*[_type == 'brand'] | order(date desc){
      ${brandFileds}
    }`
  );

  return data;
}
