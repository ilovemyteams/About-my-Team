import path from 'node:path'
import {fileURLToPath} from 'node:url'

import {defineConfig} from 'vite'
// import {defineConfig as defineSanityConfig} from 'sanity'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: __dirname,
  css: {
    postcss: './postcss.config.js', // 🔥 повністю вимикає postcss
  },
  plugins: [],
})
