export const siteData = JSON.parse("{\"base\":\"/thomas-blog/\",\"lang\":\"zh-CN\",\"title\":\"Thomas博客\",\"description\":\"Thomas的前端博客小站\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
