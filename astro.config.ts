import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import i18n from '@astrolicious/i18n'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    i18n({
      defaultLocale: 'zh-TW',
      locales: ['zh-TW', 'en'],
    }),
  ],
})
