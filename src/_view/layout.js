import { PATHS, createPath, normalizePath } from "../_utils/paths.js";

class Layout {
  static getNavItems(userInfo, currentPath) {
    const isLoggedIn = !!userInfo.username;

    // 기본 경로 정의
    const baseNavItems = getNavItems(isLoggedIn);
    // 현재 경로에서 basePath 제거
    const cleanPath = normalizePath(currentPath);

    return baseNavItems
      .filter((item) => item.show)
      .map((item) => {
        const isActive = cleanPath === item.path;
        const className = isActive
          ? "text-blue-600 font-bold"
          : "text-gray-600";

        // href에 basePath 포함
        const fullPath = createPath(item.path);

        return `
          <li>
            <a href="${fullPath}" id="${item.id}" class="${className}">
              ${item.text}
            </a>
          </li>
        `;
      })
      .join("");
  }

  static header(userInfo) {
    const currentPath = location.hash
      ? location.hash.slice(1)
      : location.pathname;

    return /*html*/ `
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${this.getNavItems(userInfo, currentPath)}
        </ul>
      </nav>
    `;
  }

  static footer() {
    return /*html*/ `
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
    `;
  }

  static render(userInfo, contents) {
    return /*html*/ `
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${this.header(userInfo)}
          <main class="p-4">
            ${contents}
          </main>
          ${this.footer()}
        </div>
      </div>
    `;
  }
}

export default Layout;

const getNavItems = (isLoggedIn) => [
  {
    path: PATHS.HOME,
    id: "home",
    text: "홈",
    show: true,
  },
  {
    path: PATHS.PROFILE,
    id: "profile",
    text: "프로필",
    show: isLoggedIn,
  },
  {
    path: PATHS.LOGOUT,
    id: "logout",
    text: "로그아웃",
    show: isLoggedIn,
  },
  {
    path: PATHS.LOGIN,
    id: "login-link",
    text: "로그인",
    show: !isLoggedIn,
  },
];
