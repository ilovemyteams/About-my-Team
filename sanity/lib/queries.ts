import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
  ...,
  portfolioHome{ "title": title[_key == $language][0].value},
  hero {
  
    "title": title[_key == $language][0].value,
    "portfolioSliderData": portfolioSlider[]->{"title": title[_key == $language][0].value, 
    image {"caption":caption[_key == $language][0].value, "asset": image.asset->url},
    "category":category->categoryName[_key == $language][0].value,
    _id}
  }
}`;

export const homePortfolioQuery = groq`
  *[_type == "home"][0]{
  portfolioHome{"title": title[_key == $language][0].value, 
    "subtitle": sectionId.subtitle[_key == $language][0].value, "anchorId": sectionId.anchorId.current,
    "portfolioSliderData": portfolioSlider[]->{"title": title[_key == $language][0].value, 
    image {"caption":caption[_key == $language][0].value, "asset": image.asset->url},
    "category":category->categoryName[_key == $language][0].value,
    _id, stages, URL}
  }
}`;

export const CTAQuery = groq`
 *[_type == "home"][0]{
    ctaSectionWriteUs {"title": title[_key == $language][0].value}, 
    ctaSectionJoinUs {"title": title[_key == $language][0].value}, 
    ctaSectionOrder {"title": title[_key == $language][0].value, 
    "description": description[_key == $language][0].value[0].children[0].text}
    }
`;

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
{_id,
"title": title[_key == $language][0].value, 
  image {"caption":caption[_key == $language][0].value, "asset": asset->url}, 
  stages, URL, 
  "category":category->categoryName[_key == $language][0].value}
`;
