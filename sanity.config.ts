"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { colorInput } from "@sanity/color-input";
import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { media, mediaAssetSource } from "sanity-plugin-media";

import { SUPPORTED_LANGUAGES } from "./sanity/constants";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { singletonPlugin } from "./sanity/plugins/settings";
import { schema } from "./sanity/schemaTypes";
import { singletonPagesType, structure } from "./sanity/structure";

export default defineConfig({
    basePath: "/studio",
    projectId,
    title: "About my team",
    dataset,
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema,
    plugins: [
        structureTool({ structure }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        colorInput(),
        media(),
        documentInternationalization({
            // Required configuration
            supportedLanguages: SUPPORTED_LANGUAGES,
            schemaTypes: ["home", "settings"],
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
