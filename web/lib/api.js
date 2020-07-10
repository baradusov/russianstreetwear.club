import sanity from "./client";
import { JSDOM } from "jsdom";

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
 * @param {string} username Brand's username at Instagram
 * @returns {array}
 */
export async function getInstagramPhotos(links) {
  if (links) {
    function parseInstagramPage(txt) {
      const doc = new JSDOM(txt);
      return doc.window.document;
    }

    function extractSharedData(doc) {
      const scripts = Array.from(doc.querySelectorAll("script"));
      const sharedDataRawText = scripts.filter((script) => {
        return script.textContent.indexOf("_sharedData") > -1;
      })[0];

      if (sharedDataRawText) {
        const sharedDataJSONText = sharedDataRawText.textContent
          .trim()
          .match(/\=\ (.*);/)[1];
        let sharedData;

        try {
          sharedData = JSON.parse(sharedDataJSONText);
        } catch (e) {
          console.log("Failed to parse data.");
        }

        return sharedData;
      }
    }

    function extractPhotos(sharedData) {
      console.log(sharedData)
      if (
        sharedData?.entry_data?.ProfilePage &&
        sharedData?.entry_data?.ProfilePage[0]?.graphql?.user
          ?.edge_owner_to_timeline_media?.edges
      ) {
        const rawPhotoData =
          sharedData.entry_data.ProfilePage[0].graphql.user
            .edge_owner_to_timeline_media.edges;

        const photos = rawPhotoData.map((photo) => {
          const {
            node: { shortcode, display_url },
          } = photo;

          return {
            photoUrl: display_url,
            postShortCode: shortcode,
          };
        });
        return photos;
      }
    }

    const [instagramLink] = links.filter((link) =>
      link.url.includes("instagram")
    );

    if (instagramLink) {
      const instagramUsername = instagramLink.url
        .split(".com/")[1]
        .replace("/", "");
      const data = await fetch(
        `https://www.instagram.com/${instagramUsername}/`
      );
      const text = await data.text();
      const document = parseInstagramPage(text);
      const sharedData = extractSharedData(document);
      const photos = extractPhotos(sharedData);

      return photos;
    }
  }
}
