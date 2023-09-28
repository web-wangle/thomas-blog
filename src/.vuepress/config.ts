import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Thomas小站",
  description: "Thomas的博客小站",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
