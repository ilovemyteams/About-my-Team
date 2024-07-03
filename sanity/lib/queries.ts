import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`;
