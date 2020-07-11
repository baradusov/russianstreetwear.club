/**
 * Get instagram uset id
 *
 * @param {array} links Array of social links from api
 * @returns {string}
 */
const getInstagramUserId = async (links) => {
  if (links) {
    const [instagramLink] = links.filter((link) =>
      link.url.includes("instagram")
    );

    if (instagramLink) {
      const username = instagramLink.url.split(".com/")[1].replace("/", "");
      const QUERY_URL = `https://www.instagram.com/web/search/topsearch/?query=${username}`;

      const response = await fetch(QUERY_URL);
      const data = await response.json();

      return data.users[0].user.pk;
    }
  }
};

export default getInstagramUserId;
