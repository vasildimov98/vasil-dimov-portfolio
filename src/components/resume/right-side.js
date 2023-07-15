import { LitElement, html } from "lit";

export class RightSideResume extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="right-side">
        <div class="right-side__heading">
          <div class="right-side__header">
            <h1 class="right-side__heading-primary">Vasil Dimov</h1>
            <p class="right-side__job-title">Software Developer</p>
          </div>
          <ul class="right-side__contact">
            <li class="right-side__contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span class="right-side__contact-text">Sofia, Bulgaria</span>
            </li>
            <li class="right-side__contact-item">
              <i class="fas fa-envelope"></i>
              <span class="right-side__contact-text"
                >vasil.dimov91@gmail.com</span
              >
            </li>
            <li class="right-side__contact-item">
              <i class="fas fa-phone"></i>
              <span class="right-side__contact-text">+359 (0)895 704 508</span>
            </li>
          </ul>
        </div>
        <div class="right-side__work">
          <h2 class="right-side__heading-secondary">Work Experience</h2>
          <div class="right-side__work-items">
            <div class="right-side__work-info">
              <h3 class="right-side__heading-tertiary">
                Quantive (previously Gtmhub)
              </h3>
              <p class="right-side__work-location">Sofia, Bulgaria</p>
              <p class="right-side__work-date">2019 - Present</p>
            </div>
            <div class="right-side__work-description">
              <h3 class="right-side__work-title">
                Frontend Software Developer
              </h3>
              <p class="right-side__work-text">
                I am part of the team that is responsible for the development of
                an OKR (Objectives and Key Results) platform. I am working on
                the frontend part of the application using Angular and React. I
                have face the challenge to work with a big codebase and to learn
                how to work with a big team.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
