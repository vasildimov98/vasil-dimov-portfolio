import Router from "./Router";

export const link = (path) => {
  const pushStateEvent = new CustomEvent("_mystate", { detail: path });
  history.pushState({}, "", path);
  dispatchEvent(pushStateEvent);
};

export default (routers) => {
  const router = new Router(routers, document.getElementById("app"));

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[route]").forEach((r) =>
      r.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          router.navigate(e.target.getAttribute("route"));
        },
        false
      )
    );
  });

  window.addEventListener("_mystate", (e) => {
    e.preventDefault();
    router.navigate(e.detail);
  });
};
