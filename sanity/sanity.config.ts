/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {colorInput} from '@sanity/color-input'
import {documentInternationalization} from '@sanity/document-internationalization'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'

import {SetEstimateTimeAndPublishAction} from './actions/SetEstimateTimeAndPublishAction'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {SUPPORTED_LANGUAGES} from './constants'
import {apiVersion, dataset, projectId} from './lib/env'
import {singletonPlugin} from './plugins/settings'
import {resolve} from './presentation/resolve'
import {schema} from './schemaTypes'
import {singletonPagesType, structure} from './structure'

const SANITY_STUDIO_PREVIEW_URL =
  (process.env.NODE_ENV === 'development'
    ? process.env.SANITY_STUDIO_PREVIEW_URL_DEV
    : process.env.SANITY_STUDIO_PREVIEW_URL) || 'http://localhost:3000'

console.log(process.env.NODE_ENV === 'development')

export default defineConfig({
  projectId,
  title: 'About my team',
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    colorInput(),
    media(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: SUPPORTED_LANGUAGES,
      schemaTypes: ['home', 'settings'],
    }),
    internationalizedArray({
      languages: SUPPORTED_LANGUAGES,
      // defaultLanguages: ['ua'],
      fieldTypes: ['string', 'text', 'portableText', 'portableTextSimple', 'portableColorTitle'],
    }),
    singletonPlugin(singletonPagesType),
    presentationTool({
      resolve,
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
  document: {
    actions: (prev, context) => {
      const isFaqType = context.schemaType === 'faq'
      return isFaqType
        ? prev.map((originalAction) =>
            originalAction.action === 'publish' ? SetEstimateTimeAndPublishAction : originalAction,
          )
        : prev
    },
  },
})
