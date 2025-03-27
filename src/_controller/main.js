import { ROUTE } from "../_router/constants.js";

class Main {
  constructor(view, model, router) {
    this.view = view;
    this.model = model;
    this.router = router;
  }

  handleNavigation = (action) => {
    switch (action) {
      case "home":
        this.router.navigate(ROUTE.main);
        break;
      case "profile":
        this.router.navigate(ROUTE.profile);
        break;
      case "login-link":
        this.router.navigate(ROUTE.login);
        break;
      case "logout":
        this.model.logout();
        this.router.navigate(ROUTE.login);
        break;
    }
  };

  render = () => {
    this.view.render(this.model.userInfo);
    this.view.bindCallback("navigate", this.handleNavigation);
  };
}

export default Main;
