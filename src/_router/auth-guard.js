export const createAuthGuard = (userModel, fallback) => (handler) => {
  const isAuthenticated = !!userModel.userInfo?.username;

  if (!isAuthenticated) {
    return fallback;
  }

  return handler;
};

export const createGuestGuard = (userModel, fallback) => (handler) => {
  const isAuthenticated = !!userModel.userInfo?.username;

  if (isAuthenticated) {
    return fallback;
  }

  return handler;
};
