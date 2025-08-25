import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ArcticFox-Shell 文档",
  description: "使用文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
