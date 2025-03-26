import Router, { ROUTE } from "../_router/index.js";

class Main {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  logout = () => {
    this.model.logout();
    Router.navigate(ROUTE.login);
  };

  render = () => {
    this.view.render(this.model.userInfo);
    this.view.bindCallback("logout", this.logout);
  };
}

export default Main;
