export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7","v-1473bf53","v-4e65ec78","v-c151bf32","v-438ffe52"]},"网站":{"path":"/category/%E7%BD%91%E7%AB%99/","keys":["v-d17748f2","v-7daf8650","v-1bcf3f06"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4e65ec78"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-c151bf32"]},"Markdown":{"path":"/tag/markdown/","keys":["v-438ffe52"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-6e19edb7"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7"]},"学习":{"path":"/tag/%E5%AD%A6%E4%B9%A0/","keys":["v-d17748f2"]},"前端工具":{"path":"/tag/%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/","keys":["v-7daf8650"]},"other":{"path":"/tag/other/","keys":["v-1bcf3f06"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


