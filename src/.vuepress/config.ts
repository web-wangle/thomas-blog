import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/thomas-blog/",
  lang: "zh-CN",
  title: "Thomas",
  description: "Thomas的博客首页",
  theme,
  head:[[ 'script', {}, `
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?341be09083431aad90137971fb7bbe97";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
     `
  ]],

  // Enable it with pwa
  // shouldPrefetch: false,
});
