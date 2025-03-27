import { ROUTER_TYPE } from "../_router/constants.js";

export const createLink = (path, routerType = ROUTER_TYPE.HISTORY) => {
  return routerType === ROUTER_TYPE.HASH ? `#${path}` : path;
};
