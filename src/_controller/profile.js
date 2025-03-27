import { ROUTE } from "../_router/constants.js";

class Profile {
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
      case "logout":
        this.model.logout();
        this.router.navigate(ROUTE.login);
        break;
    }
  };

  update = (userInfo) => {
    this.model.update(userInfo);
  };

  render = () => {
    this.view.render(this.model.userInfo);
    this.view.bindCallback("navigate", this.handleNavigation);
    this.view.bindCallback("update", this.update);
  };
}

export default Profile;
