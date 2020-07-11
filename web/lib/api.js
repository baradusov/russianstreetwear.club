import sanity from "./client";

const brandFileds = `
    _id,
    title,
    city,
    'logo': logo.asset->url,
    'slug': slug.current
`;

/**
 * Get a brand data
 *
 * @param {slug} slug слаг из Sanity (используется для url)
 * @returns {object}
 */
export async function getBrand(slug) {
  const data = await sanity.fetch(
    `*[_type == 'brand' && slug.current == $slug]{
      ${brandFileds},
      description,
      instagramId,
      links[]{_key, title, url}
    }`,
    { slug }
  );

  return data[0];
}

/**
 * Get the brands data
 *
 * @returns {array}
 */
export async function getAllBrands() {
  const data = await sanity.fetch(
    `*[_type == 'brand'] | order(title asc) {
      ${brandFileds}
    }`
  );

  return data;
}

/**
 * Get the instagram photos
 *
 * @param {string} userId User id from query url
 * @param {string|number} number Number of photos to fetch
 * @returns {array}
 */
export async function getInstagramPhotos(userId, number = 6) {
  if (userId) {
    const QUERY_URL = `https://www.instagram.com/graphql/query/?query_hash=15bf78a4ad24e33cbd838fdb31353ac1&variables={"id":${userId},"first":${number}}`;

    const getPhotos = async (queryUrl) => {
      const response = await fetch(queryUrl);
      const rawData = await response.json();
      const photos = normalizePhotoData(rawData);

      return photos;
    };

    const normalizePhotoData = (rawData) => {
      const data = rawData.data.user.edge_owner_to_timeline_media.edges.map(
        ({ node }) => {
          return {
            id: node.id,
            photoUrl: node.thumbnail_src,
            postUrl: `https://instagram.com/p/${node.shortcode}`,
          };
        }
      );

      return data;
    };

    const data = await getPhotos(QUERY_URL);

    return data;
  }
}
