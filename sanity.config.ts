"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, studioUrl } from "./sanity/lib/api";
import { schema } from "./sanity/schemas";
import { structure, singletonPagesType } from "./sanity/structure";
import { colorInput } from "@sanity/color-input";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { documentInternationalization } from "@sanity/document-internationalization";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { SUPPORTED_LANGUAGES } from "./sanity/constants";
import { singletonPlugin } from "./sanity/plugins/settings";

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

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
        ...(isDev ? devOnlyPlugins : []),
        // Add an image asset source for Unsplash
        unsplashImageAsset(),

        documentInternationalization({
            // Required configuration
            supportedLanguages: SUPPORTED_LANGUAGES,
            schemaTypes: ["home", "settings"],
        }),
        internationalizedArray({
            languages: SUPPORTED_LANGUAGES,
            defaultLanguages: ["en"],
            fieldTypes: ["string"],
        }),
        singletonPlugin(singletonPagesType),
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
