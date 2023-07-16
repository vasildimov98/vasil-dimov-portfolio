// Router class is responsible for matching the route and rendering the view.
import router from "./router/index";
import Route from "./router/Route";

// Views are responsible for rendering the HTML.
import homeView from "./views/home";
import aboutView from "./views/about";
import projectsView from "./views/projects";
import resumeView from "./views/resume";

// Components are responsible for rendering the HTML.
import { ShowcaseProject } from "./components/home/showcase-project";
import { HomeShowcases } from "./components/home/home-showcases";
import { StudyType } from "./components/studies/study-type";
import { StudyContent } from "./components/studies/study-content";
import { LeftSideResume } from "./components/resume/left-side";
import { RightSideResume } from "./components/resume/right-side";
import { ResumeWorkItem } from "./components/resume/work-item";
import { ResumeInfo } from "./components/resume/info";

// Register routes
const routes = [
  new Route("home", "/", homeView),
  new Route("home", "/home", homeView),
  new Route("about", "/about", aboutView),
  new Route("projects", "/projects", projectsView),
  new Route("resume", "/resume", resumeView),
];

// Define Custom Components
customElements.define("showcase-project", ShowcaseProject);
customElements.define("home-showcases", HomeShowcases);
customElements.define("study-content", StudyContent);
customElements.define("study-type", StudyType);
customElements.define("left-side-resume", LeftSideResume);
customElements.define("right-side-resume", RightSideResume);
customElements.define("resume-info", ResumeInfo);
customElements.define("work-item", ResumeWorkItem);

// Initialize router
router(routes);
