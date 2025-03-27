export const routerConfig = {
  get basePath() {
    return import.meta.env.PROD ? "/front_5th_chapter1-1" : "";
  },

  // URL에서 실제 라우트 경로 추출
  getRoutePath(pathname) {
    return pathname.replace(this.basePath, "") || "/";
  },

  // 전체 URL 경로 생성
  getFullPath(path) {
    return `${this.basePath}${path}`;
  },
};
