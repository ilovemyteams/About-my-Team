import { groq } from "next-sanity";

export const homeHeroQuery = groq`
  *[_type == "home"][0]{
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
  notFoundPage {"goToHomeButtonName":goToHomeButton.buttonName[_key == $language][0].value,  "buttonPageLink":select(goToHomeButton.buttonLink == "internal" => goToHomeButton.linkInternal.reference->pageSlug.current,
     goToHomeButton.buttonLink == "external" => goToHomeButton.linkExternal.url
    ),
    "titleNotFound":title[_key == $language][0].value, 
    "descriptionNotFound":description[_key == $language][0].value},
  
  header {"socialLinks": socialLinks[]{platform, "url":url.url, "newWindow":url.newWindow},
  "navigationMenu": navigationMenu[]{
  linkInternal,
  "titleMenu":title[_key == $language][0].value
  }},
   buttonJoinUS {"buttonName":buttonName[_key == $language][0].value,
      "buttonPageLink":select(buttonLink == "internal" => linkInternal.reference->pageSlug.current,
     buttonLink == "external" => linkExternal.url
    ),
     "newWindow":select(buttonLink == "external" =>linkExternal.newWindow, 
                        buttonLink == "internal" => false)},
    buttonOrder {..., "buttonName":buttonName[_key == $language][0].value},
    buttonBuyMeCoffee {..., "buttonName":buttonName[_key == $language][0].value}
  }
`;

export const footerQuery = groq`
*[_type == "settings"][0]
{
    "title": footer.title[_key == $language][0].value,
      "rightsReserved": footer.rightsReserved[_key == $language][0].value,
      "privacyPolicyTitle": footer.privacyPolicy.title[_key == $language][0].value,
      "privacyPolicyURL": footer.privacyPolicy.url[$language][0].url,
      "privacyPolicyNewWindow": footer.privacyPolicy.url[$language][0].newWindow,
       "navigationMenu": footer.navigationMenu[]{
      linkInternal,
      "titleMenu":title[_key == $language][0].value
    }
          }`;

export const projectQuery = groq`
*[_type == "project"]
{_id,
"title": title[_key == $language][0].value, 
  image {"caption":caption[_key == $language][0].value, "asset": asset->url}, 
  stages, URL, 
  "category":category->categoryName[_key == $language][0].value}
`;
export const allMembersQuery = groq`
*[_type == "team"]{
_id,
  "name":name[_key == $language][0].value,
  "role": role->title,
  "category": role->category->title[_key == $language][0].value,
  projects[]{
    _type == "reference" => @->{
      _id, "url": URL.url, "newWindow": URL.newWindow
    },
    _type == "linkExternal" => {url, newWindow}},
  "ILMTProjects": projects[][_type == "reference"]->_id,
  "about":about[_key == $language][0].value,
  "services": services[_key == $language][0].value,
  "photoURL": photo.asset->url,
    price, "showPrice": select(isAvaliblePerson == "Show price" => true),
   socialLinks[]{"url":url.url, platform},
    "tools": tools[]->title}
`;

export const categoryNamesQuery = groq`
*[_type == "specialistCategory"]{"name":title[_key == $language][0].value,
                                 "value":title[_key == "en"][0].value}`;

export const homeServicesQuery = groq`
  *[_type == "home"][0] 
  { servicesHome {
  "title": title[_key == $language][0].value,
  "description": description[_key == $language][0].value,
  "subtitle": sectionId.subtitle[_key == $language][0].value, 
  "anchorId": sectionId.anchorId.current,
  "servicesListTitle":servicesList[]->title[_key == $language][0].value,
  "servicesListText":servicesList[]->description[_key == $language][0].value
}}`;

export const homeStagesQuery = groq`
  *[_type == "home"][0]{stagesHome {
  "title": title[_key == $language][0].value,
  "subtitle": sectionId.subtitle[_key == $language][0].value, 
  "anchorId": sectionId.anchorId.current,
  "stagesListTitle":stagesList[].title[_key == $language][0].value ,
  "stagesListText":stagesList[].description[_key == $language][0].value
}}`;

export const homeAboutUsQuery = groq`
 *[_type == "home"][0]{aboutUsHomeSection {
  "title": sectionTitle[_key == $language][0].value,
  "aboutUsItemInfo": aboutUsItemInfo[].aboutUs[_key == $language][0].value,
  "subtitle": sectionId.subtitle[_key == $language][0].value, 
  "anchorId": sectionId.anchorId.current,
  "learnMoreButtonName":learnMoreButton.buttonName[_key == $language][0].value,
  "buttonPageLink":select(learnMoreButton.buttonLink == "internal" => learnMoreButton.linkInternal.reference->pageSlug.current,
     learnMoreButton.buttonLink == "external" => learnMoreButton.linkExternal.url
    )} }`;

export const homeFAQQuery = groq`
  *[_type == "home"][0]{
  "title": faqHome.title[_key == $language][0].value,
  "subtitle": faqHome.sectionId.subtitle[_key == $language][0].value, 
  "anchorId": faqHome.sectionId.anchorId.current,
  "faqList": faqHome.faqList[]->{"question":question[_key == $language][0].value, 
                                 "shortAnswer":shortAnswer[_key == $language][0].value}
}`;

export const homeTeamQuery = groq`
  *[_type == "home"][0]{teamHome {
  "title": title[_key == $language][0].value,
  "subtitle": sectionId.subtitle[_key == $language][0].value, 
  "anchorId": sectionId.anchorId.current,
  "projectsList": projectsList[]->{_id, "title": title[_key == $language][0].value}}}`;

export const homeReviewsQuery = groq`
*[_type == "home"][0]{
    "title": reviewsHome.title[_key == $language][0].value,
    "subtitle": reviewsHome.sectionId.subtitle[_key == $language][0].value,
    "anchorId": reviewsHome.sectionId.anchorId.current,
    "feedbacks": reviewsHome.reviewsSlider[] {
      _type == "reference" => @->{_id,
        "reviewText": reviewText[_key == $language][0].value,
        "feedbackLink": reviewUrl.url,
        "newWindow": reviewUrl.newWindow,
        "altImage": image.caption[_key == $language][0].value,
        "asset": image.image.asset->url,
        "reviewerName": select(
          reviewer[0]._type == "reference" => reviewer[0]->name[_key == $language][0].value,
          reviewer[0]._type != "reference" => reviewer[0].name[_key == $language][0].value
        ),
        "reviewerPosition": select(
          reviewer[0]._type == "reference" => reviewer[0]->position[_key == $language][0].value,
          reviewer[0]._type != "reference" => reviewer[0].position[_key == $language][0].value
        ),
        "projectName": project->title[_key == $language][0].value,
        "projectURL": project->URL.url,                          
        "projectCategory": project->category->categoryName[_key == $language][0].value
      }
    }
  }
`;
