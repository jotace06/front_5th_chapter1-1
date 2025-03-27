import BaseRouter from "./base-router.js";
import { routerConfig } from "./config.js";
import { ROUTE } from "./constants.js";

class HistoryRouter extends BaseRouter {
  handleRouteChange = () => {
    const currentPath = routerConfig.getRoutePath(window.location.pathname);
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
  };

  navigate = (path) => {
    const fullPath = routerConfig.getFullPath(path);
    window.history.pushState({}, "", fullPath);
    window.dispatchEvent(new Event("routeChange"));
  };
}

export default HistoryRouter;
