"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { colorInput } from "@sanity/color-input";
import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { media, mediaAssetSource } from "sanity-plugin-media";

import { SUPPORTED_LANGUAGES } from "./sanity/constants";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, studioUrl } from "./sanity/lib/api";
import { singletonPlugin } from "./sanity/plugins/settings";
import { schema } from "./sanity/schemas";
import { singletonPagesType, structure } from "./sanity/structure/index";

const PREVIEW_URL =
    process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

export default defineConfig({
    basePath: studioUrl,
    projectId,
    dataset,
    title: "About my team",
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({ structure }),
        media(),
        colorInput(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        // Add an image asset source for Unsplash
        unsplashImageAsset(),

        documentInternationalization({
            // Required configuration
            supportedLanguages: SUPPORTED_LANGUAGES,
            schemaTypes: ["settings"],
        }),
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
