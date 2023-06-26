// Router class is responsible for matching the route and rendering the view.
import router from "./router/index";
import Route from "./router/Route";

// Views are responsible for rendering the HTML.
import homeView from "./views/home";
import aboutView from "./views/about";
import projectsView from "./views/projects";
import resumeView from "./views/resume";

// Register routes
const routes = [
  new Route("home", "/", homeView),
  new Route("home", "/home", homeView),
  new Route("about", "/about", aboutView),
  new Route("projects", "/projects", projectsView),
  new Route("resume", "/resume", resumeView),
];

// Initialize router
router(routes);
