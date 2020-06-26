import sanity from "./client";

const brandFileds = `
    title,
    'slug': slug.current,
`;

export async function getBrand(slug) {
  const data = await sanity.fetch(
    `*[_type == 'post' && slug.current == $slug] | order(date desc){
      ${brandFileds}
    }`,
    { slug }
  );

  return data[0];
}

export async function getAllBrands() {
  const data = await sanity.fetch(
    `*[_type == 'post'] | order(date desc){
      ${brandFileds}
    }`
  );

  return data;
}
