import Router, { ROUTE } from "../_router/index.js";

class Profile {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  logout = () => {
    this.model.logout();
    Router.navigate(ROUTE.login);
  };

  update = (userInfo) => {
    this.model.update(userInfo);
  };

  render = () => {
    this.view.render(this.model.userInfo);
    this.view.bindCallback("logout", this.logout);
    this.view.bindCallback("update", this.update);
  };
}

export default Profile;
