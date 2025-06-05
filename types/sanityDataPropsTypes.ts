import {
    AboutUsHomeSection,
    CallToAction,
    FaqHome,
    internalGroqTypeReferenceTo,
    InternationalizedArrayTextValue,
    LinkExternal,
    PortableColorTitle,
    PortfolioHome,
    ReviewsHome,
    ServicesHome,
    StagesHome,
    TeamHome,
} from "./sanity.types";
import { Home } from "./sanity.types";

export interface HomePageProps {
    data: Home | null;
}
export type PageParamsProps = { params: { locale: string } };

export type LinkType = "linkExternal" | "linkInternal";

export type PortfolioSliderProps = {
    title: string | null;
    image: {
        caption: string | null;
        asset: string | null;
    } | null;
    category: string | null;
    _id: string;
    stages: Array<string> | null;
    URL: LinkExternal | null;
};

export type HeroHomeProps = {
    _type: "heroHome";
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    portfolioSliderData: PortfolioSliderProps[];
    portfolioSlider?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "project";
    }>;
};

export type ChildrenProps = {
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
};

export type PortfolioTitleProps = {
    children?: ChildrenProps[];
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
};

export type PortfolioHomeProps = {
    portfolioHome: {
        title: PortfolioTitleProps[];
        subtitle: string;
        anchorId: string;
        portfolioSliderData: PortfolioSliderProps[];
    };
};

export type HomeProps = {
    _id: string;
    _type: "home";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    hero?: HeroHomeProps;
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

export interface HomeFullProps {
    data: HomeProps | null;
}

export type FooterQueryResult = {
    title: PortableColorTitle | null;
    rightsReserved: string | null;
    privacyPolicyTitle: string | null;
    privacyPolicyURL: string | null;
    privacyPolicyNewWindow: boolean;
    navigationMenu: Array<{
        linkInternal: string | null;
        titleMenu: string | null;
    }> | null;
} | null;

export type SupportedPlatforms =
    | "behance"
    | "facebook"
    | "github"
    | "googleDrive"
    | "linkedin"
    | "telegram"
    | "whatsapp"
    | "youtube";
