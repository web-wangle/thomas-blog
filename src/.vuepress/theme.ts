import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://web-wangle.github.io/thomas-blog/",
  author: {
        name: "Thomas.Wang",
        url: "https://github.com/web-wangle/",
      },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "https://github.com/web-wangle/thomas-blog",
  docsDir: "src",
  blog: {
        medias: {
          Email: "1349685909@qq.com"
        },
      },
  locales: {
        "/": {
          navbar: zhNavbar,
          sidebar: zhSidebar,
          footer: "默认页脚",
          displayFooter: true,
          blog: {
            description: "一个前端开发者",
            intro: "/intro.html",
          }
        }
      },
  contributors: true,
  lastUpdated: true,
  plugins: {
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({tag}) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: {type: "tip"},
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    }
  }
});
