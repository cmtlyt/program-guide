import { defineConfig } from "islandjs";
import { resolve } from "path";

export default defineConfig({
  title: "CL 文档",
  description: "编程知识点整合, 为开发者提供的编程文档",
  icon: "/logo.png",
  base: "program-guide",
  outDir: resolve(__dirname, "../../docs"),
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdatedText: "上次更新",
    prevPageText: "上一页",
    nextPageText: "下一页",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Yuantu Ling",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cmtlyt",
      },
    ],
    nav: [
      {
        text: "首页",
        link: "/",
        activeMatch: "^/$",
      },
      {
        text: "文库",
        items: [
          {
            text: "JavaScript",
            link: "/javascript",
          },
        ],
      },
    ],
    sidebar: {
      "/": [
        {
          text: "介绍",
          items: [
            {
              text: "快速开始",
              link: "/article",
            },
          ],
        },
      ],
      "/javascript/": [
        {
          text: "JavaScript",
          items: [
            {
              text: "快速开始",
              link: "/javascript",
            },
          ],
        },
      ],
    },
  },
});
