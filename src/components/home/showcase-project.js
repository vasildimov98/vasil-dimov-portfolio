import { LitElement, html } from "lit";

export class ShowcaseProject extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      imageAlt: { type: String },
      title: { type: String },
      description: { type: String },
      link: { type: String },
      reverse: {},
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    if (this.reverse === "true") {
      return this._right();
    } else {
      return this._left();
    }
  }

  _left() {
    return html`
      <div class="showcase__container">
        <img class="showcase__image" src=${this.image} alt=${this.imageAlt} />
        <div class="showcase__description">
          <h3 class="heading-tertiary">${this.title}</h3>
          <p class="paragraph">${this.description}</p>
          <a href=${this.link} target="_blank" class="btn">View Project</a>
        </div>
      </div>
    `;
  }

  _right() {
    return html`
      <div class="showcase__container ">
        <div class="showcase__description">
          <h3 class="heading-tertiary">${this.title}</h3>
          <p class="paragraph">${this.description}</p>
          <a href=${this.link} target="_blank" class="btn">View Project</a>
        </div>
        <img class="showcase__image" src=${this.image} alt=${this.imageAlt} />
      </div>
    `;
  }
}
