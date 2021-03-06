import sanity from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

export default function urlFor(source) {
  return builder.image(source);
}
