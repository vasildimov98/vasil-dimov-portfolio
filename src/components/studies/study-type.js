import { LitElement, html } from "lit";

export class StudyType extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      title: { type: String },
      period: { type: String },
      studies: { type: Array },
      hidden: { attribute: false },
    };
  }

  constructor() {
    super();
    this.hidden = true;
  }

  render() {
    return html`
      <div class="studies__container u-margin-top-small">
        <div class="studies__header" @click="${this._toggleHeader}">
          <i class="fas fa-chevron-right studies__icon"></i>
          <h4 class="heading-tertiary">${this.title}</h4>
          <p class="studies__date">
            <i class="fas fa-calendar studies__icon"></i> ${this.period}
          </p>
        </div>
        <study-content
          .studies=${this.studies}
          .hidden=${this.hidden}
        ></study-content>
      </div>
    `;
  }

  _toggleHeader(e) {
    if (!e.currentTarget.classList.contains("studies__header")) return;

    const studiesHeader = e.currentTarget;

    const icon = studiesHeader.querySelector("i");

    if (icon.classList.contains("fa-chevron-down")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-right");
      this.hidden = true;
    } else {
      icon.classList.remove("fa-chevron-right");
      icon.classList.add("fa-chevron-down");
      this.hidden = false;
    }
  }
}
