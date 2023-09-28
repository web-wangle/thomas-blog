import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/thomas-blog/",

  lang: "zh-CN",
  title: "Thomas博客",
  description: "Thomas的前端博客小站",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
