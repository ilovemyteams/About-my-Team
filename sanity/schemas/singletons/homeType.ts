import { HomeIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { GROUPS } from "../../constants";

const TITLE = "Home";

export const homeType = defineField({
    name: "home",
    title: TITLE,
    type: "document",
    icon: HomeIcon,
    groups: GROUPS,
    fields: [
        defineField({
            name: "hero",
            title: "Hero section",
            type: "heroHome",
            group: "editorial",
        }),
        defineField({
            name: "aboutUsHomeSection",
            type: "aboutUsHomeSection",
            group: "editorial",
        }),
        defineField({
            name: "ctaSectionJoinUs",
            type: "callToAction",
            title: "CTA Section Join us",
            description: "Call to action section Join us",
            group: "cta",
        }),
        defineField({
            name: "portfolioHome",
            title: "Portfolio section",
            type: "portfolioHome",
            group: "editorial",
        }),
        defineField({
            name: "reviewsHome",
            title: "Reviews section",
            type: "reviewsHome",
            group: "editorial",
        }),
        defineField({
            name: "ctaSectionWriteUs",
            type: "callToAction",
            title: "CTA Section Write us",
            description: "Call to action section Write us",
            group: "cta",
        }),
        defineField({
            name: "servicesHome",
            title: "Services section",
            type: "servicesHome",
            group: "editorial",
        }),
        defineField({
            name: "teamHome",
            title: "Team section",
            type: "teamHome",
            group: "editorial",
        }),
        defineField({
            name: "ctaSectionJoinUsSecond",
            type: "callToAction",
            title: "CTA Section Join us",
            description: "Call to action section Join us",
            group: "cta",
        }),
        defineField({
            name: "stagesHome",
            title: "Stages section",
            type: "stagesHome",
            group: "editorial",
        }),
        defineField({
            name: "faqHome",
            title: "FAQ section",
            type: "faqHome",
            group: "editorial",
        }),
        defineField({
            name: "ctaSectionOrder",
            type: "callToAction",
            title: "CTA Section Order",
            description: "Call to action section Ready to order",
            group: "cta",
        }),
    ],
    preview: {
        prepare() {
            return {
                media: HomeIcon,
                subtitle: "Index",
                title: TITLE,
            };
        },
    },
});
