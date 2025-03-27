import { ENV } from "./environments.js";

// 기본 경로 상수 정의
export const PATHS = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  LOGOUT: "/logout",
};

// 경로 생성을 위한 유틸리티 함수들
export const createPath = (path) => {
  return `${ENV.basePath}${path}`;
};

// 경로 정규화 (basePath 제거)
export const normalizePath = (path) => {
  return path.replace(ENV.basePath, "") || "/";
};
