// Sanity Client

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ka7l6jkf", // sanity knows which project to connect
  dataset: "production", // development or production
  apiVersion: "2022-06-15", // version
  useCd: true, // use
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
