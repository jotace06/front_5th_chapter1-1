import BaseRouter from "./base-router.js";
import { ROUTE } from "./constants.js";

class HashRouter extends BaseRouter {
  constructor() {
    super();
    this.lastPath = null;
    this.routes = [];
    this.init = this.init.bind(this);
  }

  addRoute = (path, handler, guards = []) => {
    this.routes.push({
      path,
      handler,
      guards,
    });
  };

  init = () => {
    // 초기 hash가 없을 경우 처리
    if (!window.location.hash) {
      window.location.hash = "#/";
    }
    this.handleRouteChange();
  };

  handleRouteChange = () => {
    const currentHash = window.location.hash.slice(1) || "/";
    if (this.lastPath === currentHash) return;
    this.lastPath = currentHash;

    const route =
      this.routes.find((r) => r.path === currentHash) ||
      this.routes.find((r) => r.path === ROUTE.error);

    if (!route) return;

    for (const guard of route.guards) {
      if (!guard()) {
        return;
      }
    }

    route.handler();
  };

  navigate = (path) => {
    window.location.hash = path;
  };
}

export default HashRouter;
