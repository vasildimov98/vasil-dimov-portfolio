export default class Route {
  constructor(name, path, view, scripts = []) {
    this.name = name;
    this.path = path;
    this.view = view;
    this.scripts = scripts;
  }

  setProps(props) {
    this.props = props;
  }

  renderView() {
    return this.view(this.props);
  }

  getScripts() {
    return this.scripts;
  }
}
