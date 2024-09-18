import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
  ...,
  hero {
  ...,
    "title": title[_key == $language][0].value
  }
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
    buttonJoinUS {..., "buttonName":buttonName[_key == $language][0].value},
    buttonOrder {..., "buttonName":buttonName[_key == $language][0].value},
    buttonBuyMeCoffee {..., "buttonName":buttonName[_key == $language][0].value}

  }
`;

export const projectQuery = groq`
*[_type == "project"]
{"title": title[_key == $language][0].value, 
  image {"caption":caption[_key == $language][0].value, "asset": asset->url}, 
  stages, URL, 
  "category":category._ref}
`;
