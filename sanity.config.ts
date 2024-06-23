"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import settingsType from "./sanity/schemas/settings";
import { settingsStructure } from "./sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/lib/api";
import { schema } from "./sanity/schema";

export default defineConfig({
    basePath: "/studio",
    projectId,
    dataset,
    title: "About my team",
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({
            structure: settingsStructure(settingsType),
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        process.env.NODE_ENV !== "production" &&
            visionTool({ defaultApiVersion: apiVersion }),
        // Add an image asset source for Unsplash
        unsplashImageAsset(),
    ],
});
