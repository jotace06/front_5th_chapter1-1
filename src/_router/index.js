import Router from "./router.js";
import { createAuthGuard, createGuestGuard } from "./auth-guard.js";
import { ROUTE } from "./constants.js";

export default Router;
export { ROUTE, createAuthGuard, createGuestGuard };
