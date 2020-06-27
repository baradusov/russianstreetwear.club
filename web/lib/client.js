import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "lvqnddih", // you can find this in sanity.json
  dataset: process.env.NODE_ENV === "development" ? "development" : "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});
