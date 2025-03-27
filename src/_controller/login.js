import { ROUTE } from "../_router/constants.js";

class Login {
  constructor(view, model, router) {
    this.view = view;
    this.model = model;
    this.router = router;
  }

  login = (username) => {
    const result = this.model.login(username);

    if (result.status === "error") {
      alert(result.error);
      return;
    }

    this.router.navigate(ROUTE.profile);
  };

  render = () => {
    this.view.render();
    this.view.bindCallback("login", this.login);
  };
}

export default Login;
