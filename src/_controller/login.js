import Router, { ROUTE } from "../_router/index.js";

class Login {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  login = (username) => {
    const result = this.model.login(username);

    if (result.status === "error") {
      alert(result.message);
      return;
    }

    Router.navigate(ROUTE.profile);
  };

  render = () => {
    this.view.render();
    this.view.bindCallback("login", this.login);
  };
}

export default Login;
