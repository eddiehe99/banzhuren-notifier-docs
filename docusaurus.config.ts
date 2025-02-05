import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Banzhuren Notifier',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.banzhuren-notifier.eddiehe.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eddiehe99', // Usually your GitHub org/user name.
  projectName: 'banzhuren-notifier-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eddiehe99/banzhuren-notifier-docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eddiehe99/banzhuren-notifier-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Declare some <meta> tags
    metadata: [
      { name: 'keywords', content: 'banzhuren，班主任，通知传递，家长留言搬运' },
      { name: 'twitter:card', content: 'img/docusaurus-social-card.jpg' },
      { name: 'description', content: '用于自动传递班主任通知，以及自动搬运家长留言。' },
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '主页',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: '指南',
        },
        {
          type: 'docSidebar',
          sidebarId: 'toolsSidebar',
          position: 'left',
          label: '其他工具',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/eddiehe99/banzhuren-notifier-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '指南',
              to: '/docs/tutorials/intro',
            },
            {
              label: '其他工具',
              to: '/docs/tools/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: '联系',
          items: [
            {
              label: '开发人员',
              to: '/blog/authors',
            },
            {
              label: '邮件地址',
              href: 'mailto:erheng.he@m.scnu.edu.cn',
            },
            {
              label: '邮件地址（备用）',
              href: 'mailto:eddiehe99@foxmail.com',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '☕BannatieNet',
              href: 'https://bannatienet.eddiehe.top',
            },
            {
              label: 'banzhuren-notifier 工具源码',
              href: 'https://github.com/eddiehe99/banzhuren-notifier',
            },
            {
              label: '说明文档源码',
              href: 'https://github.com/eddiehe99/banzhuren-notifier-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eddie He. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
