import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/thomas-blog/",
  lang: "zh-CN",
  title: "Thomas博客",
  description: "Thomas的前端博客小站",
  theme,
  head: [
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?9d054e79bee2795f4baba5260037a958";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
