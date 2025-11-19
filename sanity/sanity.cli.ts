import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
  studioHost: 'about-my-team',
  deployment: {
    appId: 'pn91noysl1nefn8dfncvq3vp',
    autoUpdates: true,
  },
})
