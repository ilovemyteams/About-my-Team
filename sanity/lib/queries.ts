import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
  ...,
  hero {
  ...,
    "title": title[_key == $language][0].value
  },
}`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
  ...,
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
    buttonJoinUS {..., "buttonName":buttonName[_key == $language][0].value}
  }
`;

export const buttonsSettingsQuery = groq`
*[_type == "settings"][0]{
    buttonJoinUS {..., "buttonName":buttonName[_key == $language][0].value}
  }
`;
