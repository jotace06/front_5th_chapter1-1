import createRouter, { ROUTE } from "./router/index.js";
import createRenderer from "./renderer/index.js";

import { MainPage, ProfilePage, LoginPage, ErrorPage } from "./pages/index.js";

const router = createRouter();

router.addRoute(ROUTE.main, MainPage);
router.addRoute(ROUTE.profile, ProfilePage);
router.addRoute(ROUTE.login, LoginPage);
router.addRoute(ROUTE.error, ErrorPage);

const { render } = createRenderer(router.getRouteCallback);

document.addEventListener("DOMContentLoaded", render);
window.addEventListener("popstate", render);
window.addEventListener("routeChange", render);
