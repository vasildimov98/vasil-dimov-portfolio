export default class Route {
  constructor(name, path, view, scripts = []) {
    this.name = name;
    this.path = path;
    this.view = view;
  }

  setProps(props) {
    this.props = props;
  }

  renderView() {
    return this.view(this.props);
  }
}
