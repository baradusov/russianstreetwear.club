import sanity from "./client";

const brandFileds = `
    _id,
    title,
    'logo': logo.asset->url,
    'slug': slug.current
`;

export async function getBrand(slug) {
  const data = await sanity.fetch(
    `*[_type == 'brand' && slug.current == $slug]{
      ${brandFileds},
      description,
      links[]{_id, title, url}
    }`,
    { slug }
  );

  return data[0];
}

export async function getAllBrands() {
  const data = await sanity.fetch(
    `*[_type == 'brand']{
      ${brandFileds}
    }`
  );

  return data;
}
