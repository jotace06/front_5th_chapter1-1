import { ROUTE } from "./constants.js";

class Router {
  constructor() {
    this.lastPath = null;
    this.routes = [];
    this.init = this.init.bind(this);
  }

  addRoute(path, handler, guards = []) {
    // if (typeof config === "function") {
    //   this.routes.push({
    //     path,
    //     handler: config,
    //     guards: [],
    //   });
    // } else {
    //   this.routes.push({
    //     path,
    //     handler: config.handler,
    //     guards: config.guards || [],
    //   });
    // }
    this.routes.push({
      path,
      handler,
      guards,
    });
  }

  // addGuard(path, guard) {
  //   const route = this.routes.find((r) => r.path === path);
  //   if (route) {
  //     route.guards.push(guard);
  //   }
  // }

  init() {
    this.handleRouteChange();
  }

  handleRouteChange() {
    const currentPath = window.location.pathname || "/";
    if (this.lastPath === currentPath) return;
    this.lastPath = currentPath;

    const route =
      this.routes.find((r) => r.path === currentPath) ||
      this.routes.find((r) => r.path === ROUTE.error);

    if (!route) return;

    for (const guard of route.guards) {
      if (!guard()) {
        return;
      }
    }

    route.handler();
  }

  static navigate(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("routeChange")); // render() 별로라서 이렇게 추가
    /**
     * 기본 동작: popstate 이벤트는 사용자가 브라우저의 뒤로 가기(ba(k)나 앞으로)가기(forward) 버튼을 눌러 히스토리 스택을 이동할 때 자연스럽게 발생합니다.
     * 연결된 API: history.pushState()나 history.replaceState()로 URL을 변경할 때는 자동으로 발생하지 않으며, 실제 히스토리 탐색 시에만 트리거됩니다.
     */
  }
}

export default Router;
