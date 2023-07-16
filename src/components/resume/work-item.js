import { LitElement, html } from "lit";

export class ResumeWorkItem extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      place: { type: String },
      location: { type: String },
      date: { type: String },
      position: { type: String },
      description: { type: String },
    };
  }

  render() {
    return html`
      <div class="right-side__work-item u-margin-top-smallest">
        <div class="right-side__work-info">
          <h3 class="right-side__heading-tertiary">${this.place}</h3>
          <p class="right-side__work-location">${this.location}</p>
          <p class="right-side__work-date">${this.date}</p>
        </div>
        <div class="right-side__work-description">
          <h3 class="right-side__heading-tertiary">${this.position}</h3>
          <p class="right-side__work-text">${this.description}</p>
        </div>
      </div>
    `;
  }
}
