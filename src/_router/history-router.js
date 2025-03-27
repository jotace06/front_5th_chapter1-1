import BaseRouter from "./base-router.js";
import { ROUTE } from "./constants.js";

class HistoryRouter extends BaseRouter {
  handleRouteChange = () => {
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
  };

  navigate = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("routeChange"));
  };
}

export default HistoryRouter;
