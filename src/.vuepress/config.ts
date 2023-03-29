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
  hm.src = "https://hm.baidu.com/hm.js?d7c97cc394b2e9ba0fc7fa26f120a1b1";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
     `
  ]],

  // Enable it with pwa
  // shouldPrefetch: false,
});
