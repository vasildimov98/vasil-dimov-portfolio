import { html, render } from "lit";

export default class Router {
  #scriptsSet = new Set();

  constructor(routes = [], renderNode) {
    this.routes = routes;
    this.renderNode = renderNode;
    this.navigate(location.pathname + location.hash);
  }

  match(route, requestPath) {
    let paramsName = [];
    let regexPath =
      route.path.replace(/([:*])(\w+)/g, (full, colon, name) => {
        paramsName.push(name);
        return "([^/]+)";
      }) + "(?:/|$)";

    let params = {};
    let routeMatch = requestPath.match(new RegExp(regexPath));
    if (routeMatch !== null) {
      params = routeMatch.slice(1).reduce((params, value, index) => {
        if (params === null) params = {};
        params[paramsName[index]] = value;
        return params;
      }, null);
    }

    route.setProps(params);
    return routeMatch;
  }

  navigate(path) {
    if (!path) path = "/home";
    const route = this.routes.find((route) => this.match(route, path));
    if (!route) {
      render(html`404 Not Found`, this.renderNode);
      return;
    }
    history.pushState({}, "", path);
    render(route.renderView(), this.renderNode);
  }

  addRoutes(route) {
    this.routes = [...this.routes, route];
  }
}
