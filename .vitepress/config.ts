import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Stonescript',
  description: 'Stonescript language reference for Stone Story RPG',
  srcDir: 'docs',
  cleanUrls: true,
  appearance: 'force-dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],

  themeConfig: {
    siteTitle: '·:·: Stonescript :·:·',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/game-state' },
      { text: 'Appendix', link: '/appendix/ability-ids' },
      {
        text: 'v4.27.1',
        items: [
          { text: 'Release Notes', link: 'https://stonestoryrpg.com/releasenotes' },
          { text: 'Beta', link: 'https://stonestoryrpg.com/stonescript/beta.html' },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Tips', link: '/guide/tips' },
          ]
        },
        {
          text: 'Language',
          items: [
            { text: 'Basics', link: '/guide/basics' },
            { text: 'Variables', link: '/guide/variables' },
            { text: 'Functions', link: '/guide/functions' },
            { text: 'Loops', link: '/guide/loops' },
            { text: 'Arrays', link: '/guide/arrays' },
            { text: 'Importing Scripts', link: '/guide/importing' },
            { text: 'ASCII Art', link: '/guide/ascii-art' },
            { text: 'Custom Input', link: '/guide/custom-input' },
            { text: 'User Interface', link: '/guide/user-interface' },
          ]
        },
      ],

      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Game State', link: '/reference/game-state' },
            { text: 'Commands', link: '/reference/commands' },
            { text: 'Search Filters', link: '/reference/search-filters' },
            { text: 'Comparisons', link: '/reference/comparisons' },
            { text: 'Math Operations', link: '/reference/math-operations' },
          ]
        },
        {
          text: 'Native Functions',
          items: [
            { text: 'Overview', link: '/reference/native-functions/' },
            { text: 'ambient', link: '/reference/native-functions/ambient' },
            { text: 'BigNumber', link: '/reference/native-functions/bignumber' },
            { text: 'color', link: '/reference/native-functions/color' },
            { text: 'draw', link: '/reference/native-functions/draw' },
            { text: 'event', link: '/reference/native-functions/event' },
            { text: 'int', link: '/reference/native-functions/int' },
            { text: 'item', link: '/reference/native-functions/item' },
            { text: 'key', link: '/reference/native-functions/key' },
            { text: 'loc', link: '/reference/native-functions/loc' },
            { text: 'math', link: '/reference/native-functions/math' },
            { text: 'music', link: '/reference/native-functions/music' },
            { text: 'player', link: '/reference/native-functions/player' },
            { text: 'screen', link: '/reference/native-functions/screen' },
            { text: 'storage', link: '/reference/native-functions/storage' },
            { text: 'string', link: '/reference/native-functions/string' },
            { text: 'sys', link: '/reference/native-functions/sys' },
            { text: 'te (localization)', link: '/reference/native-functions/te' },
            { text: 'time', link: '/reference/native-functions/time' },
            { text: 'ui', link: '/reference/native-functions/ui' },
          ]
        },
      ],

      '/appendix/': [
        {
          text: 'Appendix',
          items: [
            { text: 'Ability Cooldown IDs', link: '/appendix/ability-ids' },
            { text: 'Sound Effects', link: '/appendix/sound-effects' },
            { text: 'Music Tracks', link: '/appendix/music' },
            { text: 'Ambient Loops', link: '/appendix/ambient' },
            { text: 'Importable Scripts', link: '/appendix/importable-scripts' },
          ]
        }
      ],
    },

    search: {
      provider: 'local',
      options: {
        // TODO look at algolia
      }
    },

    editLink: {
      pattern: 'https://github.com/georgehm/stonescript-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/georgehm/stonescript-docs' },
      { icon: 'discord', link: 'https://discord.gg/StoneStoryRPG' },
    ],

    footer: {
      message: 'Stonescript is part of Stone Story RPG.',
      copyright: 'Copyright © Martian Rex Inc.'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  }
})
