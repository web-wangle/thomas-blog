export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-14e6501c","v-6e19edb7","v-184f4da6","v-1473bf53","v-4e65ec78","v-438ffe52"]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

