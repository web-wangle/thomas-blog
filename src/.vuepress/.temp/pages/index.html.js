export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"博客首页\",\"heroImage\":\"/logo.jpg\",\"heroImageStyle\":{\"width\":\"200px\",\"height\":\"200px\",\"borderRadius\":\"50%\",\"objectFit\":\"cover\",\"border\":\"4px solid white\",\"boxSizing\":\"border-box\"},\"heroText\":\"Thomas博客小站\",\"bgImage\":\"/background.jpg\",\"heroFullScreen\":true,\"tagline\":\"雲來山更佳，雲去山如畫。\",\"projects\":[{\"icon\":\"link\",\"name\":\"常用网站\",\"desc\":\"一些常用网站链接整理\",\"link\":\"/link\"},{\"icon\":\"book\",\"name\":\"经典书籍\",\"desc\":\"好书收集整理\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"article\",\"name\":\"我的文章\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"}],\"footer\":\"————山因雲晦明，雲共山高下。\",\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.43,\"words\":128},\"filePathRelative\":\"README.md\",\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
