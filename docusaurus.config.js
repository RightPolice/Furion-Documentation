module.exports = {
  title: "Furion",
  tagline: "让 .NET 开发更简单，更通用，更流行。",
  // Local deploy use config below
  // url: "http://localhost",
  // baseUrl: "/",
  url: "https://rightpolice.github.io",
  baseUrl: "/Furion-Documentation",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "百签科技（广东）有限公司",
  projectName: "Furion",
  scripts: [],
  themeConfig: {
    zoom: {
      selector:
        ".markdown :not(em) > img,.markdown > img, article img[loading]",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      config: {},
    },
    announcementBar: {
      id: "vip",
      content: "Selfless contributions are not an unattainable fantasy.",
      backgroundColor: "#4623d9",
      textColor: "yellow",
      isCloseable: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      additionalLanguages: ["powershell", "csharp", "sql"],
      // theme: require("prism-react-renderer/themes/github"),
      // darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Furion",
      logo: {
        alt: "Furion Logo",
        src: "img/furionlogo.png",
      },
      hideOnScroll: true,
      items: [
        // {
        //   type: "docsVersionDropdown",
        //   position: "left",
        // },
        {
          to: "docs/category/appendix",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        {
          to: "docs/global/app",
          activeBasePath: "docs/global",
          label: "静态类",
          position: "left",
        },
        {
          to: "docs/settings/appsettings",
          activeBasePath: "docs/settings",
          label: "配置",
          position: "left",
        },
        { to: "blog", label: "博客", position: "left" },
        {
          label: "更新日志",
          position: "left",
          items: [
            {
              label: "📝 查看日志（v4.9.1.7）",
              href: "/docs/upgrade",
            },
            {
              label: "🚀 路线图",
              href: "/docs/target",
            },
          ],
        },
        {
          label: "API",
          position: "left",
          href: "http://furion.baiqian.ltd/api/api",
        },
        // {
        //   to: "docs/net6-to-net7",
        //   activeBasePath: "docs/net6-to-net7",
        //   label: ".NET7🚀",
        //   position: "left",
        // },
        {
          label: "仓库",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/RightPolice/Furion-Documentation",
            }
          ],
        },
        {
          label: "案例",
          position: "right",
          to: "docs/case",
          activeBasePath: "docs/case",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "入门",
              to: "docs/category/getstart",
            },
            {
              label: "手册",
              to: "docs/category/appendix",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "blog",
            },
          ],
        },
      ],
      copyright: `版权 © 2020-present 百小僧, 百签科技（广东）有限公司`,
      logo: {
        src: "img/chinadotnet.png",
        href: "https://gitee.com/dotnetchina",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://gitee.com/dotnetchina/Furion/tree/v4/handbook/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://gitee.com/dotnetchina/Furion/tree/v4/handbook/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};
