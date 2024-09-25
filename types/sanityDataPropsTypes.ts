import {
    AboutUsHomeSection,
    CallToAction,
    FaqHome,
    internalGroqTypeReferenceTo,
    InternationalizedArrayTextValue,
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
export type HomePageParamsProps = { params: { locale: string } };

export type PortfolioSliderProps = {
    title: string;
    image: { caption: string; asset: string };
    category: string;
    _id: string;
};

export type HeroHomeProps = {
    _type: "heroHome";
    title?: Array<
        {
            _key: string;
        } & InternationalizedArrayTextValue
    >;
    portfolioSliderProp: PortfolioSliderProps[];
    portfolioSlider?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "project";
    }>;
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
