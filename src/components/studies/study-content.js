import { LitElement, html } from "lit";

export class StudyContent extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      studies: { type: Array },
      hidden: { type: Boolean },
    };
  }

  render() {
    return html`
      <ul
        class="studies__content u-margin-top-small ${this.hidden && "hidden"}"
      >
        ${this._displayListItems()}
      </ul>
    `;
  }

  _displayListItems() {
    const descriptionOrParagraphs = (content) => {
      if (Array.isArray(content)) {
        return content.map(
          (p) => html`<p class="paragraph u-margin-top-small">${p.text}</p>`
        );
      }
      return html`<p class="paragraph">${content}</p>`;
    };

    return this.studies.map(
      (s) => html`
        <li class="studies__item">
          <a
            href=${s.link}
            target="_blank"
            class="studies__link heading-quaternary"
            >${s.title}
          </a>
          ${descriptionOrParagraphs(s.description || s.paragraphs)}
        </li>
      `
    );
  }
}
