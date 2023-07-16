import { LitElement, html } from "lit";

export class ResumeInfo extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      heading: { type: String },
      works: { type: Array },
    };
  }

  render() {
    return html`
      <div class="right-side__works u-margin-top-huge">
        <h2 class="right-side__heading-secondary">${this.heading}</h2>
        <div class="right-side__work-items u-margin-top-smallest">
          ${this.works.map((w) => {
            return html`<work-item
              place="${w.place}"
              location="${w.location}"
              date="${w.date}"
              position="${w.position}"
              description="${w.description}"
            ></work-item>`;
          })}
        </div>
      </div>
    `;
  }
}
