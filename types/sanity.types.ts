/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
    _type: "sanity.imagePaletteSwatch";
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
};

export type SanityImagePalette = {
    _type: "sanity.imagePalette";
    darkMuted?: SanityImagePaletteSwatch;
    lightVibrant?: SanityImagePaletteSwatch;
    darkVibrant?: SanityImagePaletteSwatch;
    vibrant?: SanityImagePaletteSwatch;
    dominant?: SanityImagePaletteSwatch;
    lightMuted?: SanityImagePaletteSwatch;
    muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
    _type: "sanity.imageDimensions";
    height?: number;
    width?: number;
    aspectRatio?: number;
};

export type SanityFileAsset = {
    _id: string;
    _type: "sanity.fileAsset";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    originalFilename?: string;
    label?: string;
    title?: string;
    description?: string;
    altText?: string;
    sha1hash?: string;
    extension?: string;
    mimeType?: string;
    size?: number;
    assetId?: string;
    uploadId?: string;
    path?: string;
    url?: string;
    source?: SanityAssetSourceData;
};

export type Geopoint = {
    _type: "geopoint";
    lat?: number;
    lng?: number;
    alt?: number;
};

export type Page = {
    _id: string;
    _type: "page";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    overview?: Array<{
        children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
        }>;
        style?: "normal";
        listItem?: never;
        markDefs?: null;
        level?: number;
        _type: "block";
        _key: string;
    }>;
    body?: Array<
        | {
              children?: Array<{
                  marks?: Array<string>;
                  text?: string;
                  _type: "span";
                  _key: string;
              }>;
              style?: "normal";
              listItem?: "bullet" | "number";
              markDefs?: Array<{
                  href?: string;
                  _type: "link";
                  _key: string;
              }>;
              level?: number;
              _type: "block";
              _key: string;
          }
        | ({
              _key: string;
          } & Timeline)
        | {
              asset?: {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
              };
              hotspot?: SanityImageHotspot;
              crop?: SanityImageCrop;
              caption?: string;
              alt?: string;
              _type: "image";
              _key: string;
          }
    >;
};

export type ColorTheme = {
    _id: string;
    _type: "colorTheme";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    text?: Color;
    background?: Color;
};

export type MenuItem = {
    _type: "menuItem";
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    linkInternal?: string;
};

export type Stage = {
    _type: "stage";
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    description?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
};

export type Customer = {
    _type: "customer";
    name?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    position?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    photo?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
};

export type AnchorLink = {
    _type: "anchorLink";
    subtitle?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    anchorId?: Slug;
};

export type AboutUsItem = {
    _type: "aboutUsItem";
    AboutUs?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
};

export type SocialLinks = {
    _type: "socialLinks";
    platform?:
        | "linkedin"
        | "telegram"
        | "github"
        | "behance"
        | "googleDrive"
        | "whatsapp"
        | "youtube"
        | "pinterest"
        | "email"
        | "facebook"
        | "instagram"
        | "twitter";
    url?: LinkExternal;
};

export type Milestone = {
    _type: "milestone";
    title?: string;
    description?: string;
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
    tags?: Array<string>;
    duration?: Duration;
};

export type Duration = {
    _type: "duration";
    start?: string;
    end?: string;
};

export type Timeline = {
    _type: "timeline";
    items?: Array<{
        title?: string;
        milestones?: Array<
            {
                _key: string;
            } & Milestone
        >;
        _type: "item";
        _key: string;
    }>;
};

export type Instagram = {
    _type: "instagram";
    url?: string;
};

export type ImageFeature = {
    _type: "imageFeature";
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
    variant?: string | "caption" | "callToAction";
    caption?: string;
    callToAction?: ImageCallToAction;
};

export type Images = {
    _type: "images";
    imageFeatures?: Array<
        {
            _key: string;
        } & ImageFeature
    >;
    fullWidth?: boolean;
    verticalAlign?: "top" | "center" | "bottom";
};

export type ImageCallToAction = {
    _type: "imageCallToAction";
    title?: string;
    link?: Array<
        | ({
              _key: string;
          } & LinkInternal)
        | ({
              _key: string;
          } & LinkExternal)
    >;
};

export type Grid = {
    _type: "grid";
    items?: Array<
        {
            _key: string;
        } & GridItem
    >;
};

export type GridItem = {
    _type: "gridItem";
    title?: string;
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
    body?: Array<{
        children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
        }>;
        style?:
            | "normal"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
            | ({
                  _key: string;
              } & LinkEmail)
            | ({
                  _key: string;
              } & LinkInternal)
            | ({
                  _key: string;
              } & LinkExternal)
        >;
        level?: number;
        _type: "block";
        _key: string;
    }>;
};

export type Callout = {
    _type: "callout";
    text?: string;
    link?: Array<
        | ({
              _key: string;
          } & LinkInternal)
        | ({
              _key: string;
          } & LinkExternal)
    >;
};

export type Accordion = {
    _type: "accordion";
    groups?: Array<
        {
            _key: string;
        } & AccordionGroup
    >;
};

export type AccordionGroup = {
    _type: "accordionGroup";
    title?: string;
    body?: Array<{
        children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
        }>;
        style?:
            | "normal"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
            | ({
                  _key: string;
              } & LinkEmail)
            | ({
                  _key: string;
              } & LinkInternal)
            | ({
                  _key: string;
              } & LinkExternal)
        >;
        level?: number;
        _type: "block";
        _key: string;
    }>;
};

export type PortableColorTitle = Array<{
    children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
}>;

export type PortableTextSimple = Array<{
    children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<
        | ({
              _key: string;
          } & LinkEmail)
        | ({
              _key: string;
          } & LinkInternal)
        | ({
              _key: string;
          } & LinkExternal)
    >;
    level?: number;
    _type: "block";
    _key: string;
}>;

export type PortableText = Array<
    | {
          children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: "span";
              _key: string;
          }>;
          style?:
              | "normal"
              | "h1"
              | "h2"
              | "h3"
              | "h4"
              | "h5"
              | "h6"
              | "blockquote";
          listItem?: "bullet" | "number";
          markDefs?: Array<
              | ({
                    _key: string;
                } & LinkEmail)
              | ({
                    _key: string;
                } & LinkInternal)
              | ({
                    _key: string;
                } & LinkExternal)
          >;
          level?: number;
          _type: "block";
          _key: string;
      }
    | ({
          _key: string;
      } & Accordion)
    | ({
          _key: string;
      } & Callout)
    | ({
          _key: string;
      } & Grid)
    | ({
          _key: string;
      } & Images)
    | ({
          _key: string;
      } & Instagram)
>;

export type Tool = {
    _id: string;
    _type: "tool";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
};

export type Service = {
    _id: string;
    _type: "service";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    description?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
};

export type Faq = {
    _id: string;
    _type: "faq";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    numberOfLikes?: number;
    question?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    shortAnswer?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    fullAnswer?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableTextValue
    >;
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        caption?: Array<
            {
                _key: string;
            } & InternationalizedArrayStringValue
        >;
        _type: "image";
    };
};

export type Review = {
    _id: string;
    _type: "review";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    project?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "project";
    };
    reviewText?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    reviewUrl?: LinkExternal;
};

export type Project = {
    _id: string;
    _type: "project";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    description?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    customers?: Array<
        {
            _key: string;
        } & Customer
    >;
    startDate?: string;
    endDate?: string;
    category?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "siteCategory";
    };
    status?: "recruitingTeam" | "development" | "completed";
    teamMembers?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "team";
    }>;
    URL?: LinkExternal;
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        caption?: Array<
            {
                _key: string;
            } & InternationalizedArrayStringValue
        >;
        _type: "image";
    };
    stages?: Array<string>;
};

export type SiteCategory = {
    _id: string;
    _type: "siteCategory";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    categoryName?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
};

export type Team = {
    _id: string;
    _type: "team";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    role?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "specialist";
    };
    price?: number;
    isAvaliblePerson?: "Show price" | "Do not show price";
    about?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    services?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    projects?: Array<
        | ({
              _key: string;
          } & LinkExternal)
        | {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              _key: string;
              [internalGroqTypeReferenceTo]?: "project";
          }
    >;
    photo?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
    socialLinks?: Array<
        {
            _key: string;
        } & SocialLinks
    >;
    tools?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "tool";
    }>;
};

export type Specialist = {
    _id: string;
    _type: "specialist";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    category?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "specialistCategory";
    };
};

export type SpecialistCategory = {
    _id: string;
    _type: "specialistCategory";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
};

export type LinkInternal = {
    _type: "linkInternal";
    reference?:
        | {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "home";
          }
        | {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "aboutUs";
          };
};

export type AboutUs = {
    _id: string;
    _type: "aboutUs";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    language?: string;
};

export type Home = {
    _id: string;
    _type: "home";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    hero?: HeroHome;
    aboutUsHomeSection?: AboutUsHomeSection;
    ctaSectionJoinUs?: CallToAction;
    portfolioHome?: PortfolioHome;
    reviewsHome?: ReviewsHome;
    ctaSectionWriteUs?: CallToAction;
    servicesHome?: ServicesHome;
    teamHome?: TeamHome;
    ctaSectionJoinUsSecond?: CallToAction;
    stagesHome?: StagesHome;
    faqHome?: FaqHome;
    ctaSectionOrder?: CallToAction;
};

export type FaqHome = {
    _type: "faqHome";
    sectionId?: AnchorLink;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    faqList?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "faq";
    }>;
};

export type StagesHome = {
    _type: "stagesHome";
    sectionId?: AnchorLink;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    stagesList?: Array<
        {
            _key: string;
        } & Stage
    >;
};

export type TeamHome = {
    _type: "teamHome";
    sectionId?: AnchorLink;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    projectsList?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "project";
    }>;
};

export type ServicesHome = {
    _type: "servicesHome";
    sectionId?: AnchorLink;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    servicesList?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "service";
    }>;
    description?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
};

export type ReviewsHome = {
    _type: "reviewsHome";
    sectionId?: AnchorLink;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    reviewsSlider?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "review";
    }>;
};

export type PortfolioHome = {
    _type: "portfolioHome";
    sectionId?: AnchorLink;
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    portfolioSlider?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "project";
    }>;
};

export type CallToAction = {
    _type: "callToAction";
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayStringValue
    >;
    description?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableTextSimpleValue
    >;
};

export type AboutUsHomeSection = {
    _type: "aboutUsHomeSection";
    sectionId?: AnchorLink;
    sectionTitle?: Array<
        {
            _key: string;
        } & InternationalizedArrayPortableColorTitleValue
    >;
    shortDescription?: Array<
        {
            _key: string;
        } & AboutUsItem
    >;
    learnMoreButton?: Button;
};

export type HeroHome = {
    _type: "heroHome";
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    portfolioSlider?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "project";
    }>;
};

export type LinkExternal = {
    _type: "linkExternal";
    url?: string;
    newWindow?: boolean;
};

export type LinkEmail = {
    _type: "linkEmail";
    email?: string;
};

export type InternationalizedArrayPortableColorTitleValue = {
    _type: "internationalizedArrayPortableColorTitleValue";
    value?: PortableColorTitle;
};

export type InternationalizedArrayPortableTextSimpleValue = {
    _type: "internationalizedArrayPortableTextSimpleValue";
    value?: PortableTextSimple;
};

export type InternationalizedArrayPortableTextValue = {
    _type: "internationalizedArrayPortableTextValue";
    value?: PortableText;
};

export type InternationalizedArrayTextValue = {
    _type: "internationalizedArrayTextValue";
    value?: string;
};

export type InternationalizedArrayStringValue = {
    _type: "internationalizedArrayStringValue";
    value?: string;
};

export type InternationalizedArrayPortableColorTitle = Array<
    {
        _key: string;
    } & InternationalizedArrayPortableColorTitleValue
>;

export type InternationalizedArrayPortableTextSimple = Array<
    {
        _key: string;
    } & InternationalizedArrayPortableTextSimpleValue
>;

export type InternationalizedArrayPortableText = Array<
    {
        _key: string;
    } & InternationalizedArrayPortableTextValue
>;

export type InternationalizedArrayText = Array<
    {
        _key: string;
    } & InternationalizedArrayTextValue
>;

export type InternationalizedArrayString = Array<
    {
        _key: string;
    } & InternationalizedArrayStringValue
>;

export type TranslationMetadata = {
    _id: string;
    _type: "translation.metadata";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    translations?: Array<
        {
            _key: string;
        } & InternationalizedArrayReferenceValue
    >;
    schemaTypes?: Array<string>;
};

export type InternationalizedArrayReferenceValue = {
    _type: "internationalizedArrayReferenceValue";
    value?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "settings";
    };
};

export type Settings = {
    _id: string;
    _type: "settings";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    language?: string;
    header?: Header;
    footer?: Footer;
    notFoundPage?: NotFoundPage;
    seo?: Seo;
    buttonBuyMeCoffee?: Button;
    buttonJoinUS?: Button;
    buttonOrder?: Button;
};

export type Button = {
    _type: "button";
    buttonName?: InternationalizedArrayString;
    buttonLink?: "noLink" | "internal" | "external";
    linkInternal?: LinkInternal;
    linkExternal?: LinkExternal;
};

export type SanityImageCrop = {
    _type: "sanity.imageCrop";
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};

export type SanityImageHotspot = {
    _type: "sanity.imageHotspot";
    x?: number;
    y?: number;
    height?: number;
    width?: number;
};

export type SanityImageAsset = {
    _id: string;
    _type: "sanity.imageAsset";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    originalFilename?: string;
    label?: string;
    title?: string;
    description?: string;
    altText?: string;
    sha1hash?: string;
    extension?: string;
    mimeType?: string;
    size?: number;
    assetId?: string;
    uploadId?: string;
    path?: string;
    url?: string;
    metadata?: SanityImageMetadata;
    source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
    _type: "sanity.assetSourceData";
    name?: string;
    id?: string;
    url?: string;
};

export type SanityImageMetadata = {
    _type: "sanity.imageMetadata";
    location?: Geopoint;
    dimensions?: SanityImageDimensions;
    palette?: SanityImagePalette;
    lqip?: string;
    blurHash?: string;
    hasAlpha?: boolean;
    isOpaque?: boolean;
};

export type Seo = {
    _type: "seo";
    title?: InternationalizedArrayString;
    description?: string;
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
};

export type NotFoundPage = {
    _type: "notFoundPage";
    title?: InternationalizedArrayString;
    description?: InternationalizedArrayText;
    goToHomeButton?: Button;
};

export type Footer = {
    _type: "footer";
    title?: InternationalizedArrayPortableColorTitle;
    navigationMenu?: Array<
        {
            _key: string;
        } & MenuItem
    >;
    privacyPolicy?: {
        title?: InternationalizedArrayString;
        url?: Array<
            | ({
                  _key: string;
              } & LinkExternal)
            | ({
                  _key: string;
              } & LinkInternal)
        >;
    };
};

export type Header = {
    _type: "header";
    navigationMenu?: Array<
        {
            _key: string;
        } & MenuItem
    >;
    socialLinks?: Array<
        {
            _key: string;
        } & SocialLinks
    >;
};

export type InternationalizedArrayReference = Array<
    {
        _key: string;
    } & InternationalizedArrayReferenceValue
>;

export type Color = {
    _type: "color";
    hex?: string;
    alpha?: number;
    hsl?: HslaColor;
    hsv?: HsvaColor;
    rgb?: RgbaColor;
};

export type RgbaColor = {
    _type: "rgbaColor";
    r?: number;
    g?: number;
    b?: number;
    a?: number;
};

export type HsvaColor = {
    _type: "hsvaColor";
    h?: number;
    s?: number;
    v?: number;
    a?: number;
};

export type HslaColor = {
    _type: "hslaColor";
    h?: number;
    s?: number;
    l?: number;
    a?: number;
};

export type MediaTag = {
    _id: string;
    _type: "media.tag";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: Slug;
};

export type Slug = {
    _type: "slug";
    current?: string;
    source?: string;
};

export type AllSanitySchemaTypes =
    | SanityImagePaletteSwatch
    | SanityImagePalette
    | SanityImageDimensions
    | SanityFileAsset
    | Geopoint
    | Page
    | ColorTheme
    | MenuItem
    | Stage
    | Customer
    | AnchorLink
    | AboutUsItem
    | SocialLinks
    | Milestone
    | Duration
    | Timeline
    | Instagram
    | ImageFeature
    | Images
    | ImageCallToAction
    | Grid
    | GridItem
    | Callout
    | Accordion
    | AccordionGroup
    | PortableColorTitle
    | PortableTextSimple
    | PortableText
    | Tool
    | Service
    | Faq
    | Review
    | Project
    | SiteCategory
    | Team
    | Specialist
    | SpecialistCategory
    | LinkInternal
    | AboutUs
    | Home
    | FaqHome
    | StagesHome
    | TeamHome
    | ServicesHome
    | ReviewsHome
    | PortfolioHome
    | CallToAction
    | AboutUsHomeSection
    | HeroHome
    | LinkExternal
    | LinkEmail
    | InternationalizedArrayPortableColorTitleValue
    | InternationalizedArrayPortableTextSimpleValue
    | InternationalizedArrayPortableTextValue
    | InternationalizedArrayTextValue
    | InternationalizedArrayStringValue
    | InternationalizedArrayPortableColorTitle
    | InternationalizedArrayPortableTextSimple
    | InternationalizedArrayPortableText
    | InternationalizedArrayText
    | InternationalizedArrayString
    | TranslationMetadata
    | InternationalizedArrayReferenceValue
    | Settings
    | Button
    | SanityImageCrop
    | SanityImageHotspot
    | SanityImageAsset
    | SanityAssetSourceData
    | SanityImageMetadata
    | Seo
    | NotFoundPage
    | Footer
    | Header
    | InternationalizedArrayReference
    | Color
    | RgbaColor
    | HsvaColor
    | HslaColor
    | MediaTag
    | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: homePageQuery
// Query: *[_type == "home"][0]{  ...,  hero {  ...,    "title": title[_key == $language][0].value  },  ctaSectionJoinUs {  ...,    "ctaButton": ctaButton {"buttonName": buttonName[_key == $language][0].value}  },  ctaSectionOrder {  ...,    "ctaButton": ctaButton {"buttonName": buttonName[_key == $language][0].value}  }, }
export type HomePageQueryResult = {
    _id: string;
    _type: "home";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    hero: {
        _type: "heroHome";
        title: string | null;
        portfolioSlider?: Array<{
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            _key: string;
            [internalGroqTypeReferenceTo]?: "project";
        }>;
    } | null;
    aboutUsHomeSection?: AboutUsHomeSection;
    ctaSectionJoinUs: {
        _type: "callToAction";
        title?: Array<
            {
                _key: string;
            } & InternationalizedArrayStringValue
        >;
        description?: Array<
            {
                _key: string;
            } & InternationalizedArrayPortableTextSimpleValue
        >;
        ctaButton: null;
    } | null;
    portfolioHome?: PortfolioHome;
    reviewsHome?: ReviewsHome;
    ctaSectionWriteUs?: CallToAction;
    servicesHome?: ServicesHome;
    teamHome?: TeamHome;
    ctaSectionJoinUsSecond?: CallToAction;
    stagesHome?: StagesHome;
    faqHome?: FaqHome;
    ctaSectionOrder: {
        _type: "callToAction";
        title?: Array<
            {
                _key: string;
            } & InternationalizedArrayStringValue
        >;
        description?: Array<
            {
                _key: string;
            } & InternationalizedArrayPortableTextSimpleValue
        >;
        ctaButton: null;
    } | null;
} | null;
// Variable: settingsQuery
// Query: *[_type == "settings"][0]{  ...,    footer,    menuItems[]->{      _type,      "slug": slug.current,      title    },    ogImage,    buttonJoinUS {"buttonName":buttonName[_key == $language][0].value}  }
export type SettingsQueryResult = {
    _id: string;
    _type: "settings";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    language?: string;
    header?: Header;
    footer: Footer | null;
    notFoundPage?: NotFoundPage;
    seo?: Seo;
    buttonBuyMeCoffee?: Button;
    buttonJoinUS: {
        buttonName: string | null;
    } | null;
    buttonOrder?: Button;
    menuItems: null;
    ogImage: null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
    interface SanityQueries {
        '\n  *[_type == "home"][0]{\n  ...,\n  hero {\n  ...,\n    "title": title[_key == $language][0].value\n  },\n  ctaSectionJoinUs {\n  ...,\n    "ctaButton": ctaButton {"buttonName": buttonName[_key == $language][0].value}\n  },\n  ctaSectionOrder {\n  ...,\n    "ctaButton": ctaButton {"buttonName": buttonName[_key == $language][0].value}\n  },\n \n}': HomePageQueryResult;
        '\n  *[_type == "settings"][0]{\n  ...,\n    footer,\n    menuItems[]->{\n      _type,\n      "slug": slug.current,\n      title\n    },\n    ogImage,\n    buttonJoinUS {"buttonName":buttonName[_key == $language][0].value}\n  }\n': SettingsQueryResult;
    }
}
