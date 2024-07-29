import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ArcticFox Docs",
  description: "ArcticFox",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  plugins: [
    [
      "md-enhance",
      {
        container: true,
        align: true,
      },
    ],
  ],
});

