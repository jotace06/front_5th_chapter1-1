const createRenderer = (getRouteCallback) => {
  const $root = document.getElementById("root");
  // let lastPath = null;

  const render = () => {
    // const currentPath = window.location.pathname || "/";
    // if (lastPath === currentPath) return;
    // lastPath = currentPath;
    const getContent = getRouteCallback();
    $root.innerHTML = getContent();
  };

  return { render };
};

export default createRenderer;
