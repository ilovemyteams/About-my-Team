"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { colorInput } from "@sanity/color-input";
import { visionTool } from "@sanity/vision";
// import { theme } from "https://themer.sanity.build/api/hues?default=3e335e;600;lightest:f0f0ff&primary=a258ff;600;lightest:f3f3fb&transparent=40365b;600;lightest:bfb4ff&positive=43d675;300&caution=fbd024;200&lightest=fcfcfd&darkest=0f0d15";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { media, mediaAssetSource } from "sanity-plugin-media";

import { SUPPORTED_LANGUAGES } from "./sanity/constants";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, studioUrl } from "./sanity/lib/api";
import { PREVIEW_URL } from "./sanity/lib/api";
import { singletonPlugin } from "./sanity/plugins/settings";
import { schema } from "./sanity/schemas";
import { singletonPagesType, structure } from "./sanity/structure/index";

export default defineConfig({
    basePath: studioUrl,
    projectId,
    dataset,
    title: "About my team",
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    // theme,
    plugins: [
        structureTool({ structure }),
        media(),
        colorInput(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        // Add an image asset source for Unsplash
        unsplashImageAsset(),
        internationalizedArray({
            languages: SUPPORTED_LANGUAGES,
            defaultLanguages: ["ua"],
            fieldTypes: [
                "string",
                "text",
                "portableText",
                "portableTextSimple",
                "portableColorTitle",
            ],
        }),
        singletonPlugin(singletonPagesType),
        presentationTool({
            previewUrl: {
                previewMode: {
                    enable: `${PREVIEW_URL}/api/draftMode/enable`,
                },
            },
        }),
    ],

    form: {
        file: {
            assetSources: previousAssetSources => {
                return previousAssetSources.filter(
                    assetSource => assetSource !== mediaAssetSource
                );
            },
        },
        image: {
            assetSources: previousAssetSources => {
                return previousAssetSources.filter(
                    assetSource => assetSource === mediaAssetSource
                );
            },
        },
    },
});
