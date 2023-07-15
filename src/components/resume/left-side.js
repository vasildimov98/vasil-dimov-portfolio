import { LitElement, html } from "lit";

export class LeftSideResume extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="left-side">
        <img src="../images/myself/vasil.jpeg" class="left-side__image"></img>
        <div class="left-side__about">
          <h2 class="left-side__heading-secondary">About Me</h2>
          <p class="paragraph left-side__paragraph">Motivated professional with years of experience in software development. Strong track record of delivering exceptional results and contributing to team success. Proficient in Javascript, HTML & CSS, C# and known for organizational and time management skills. </p>
        </div>
        <div class="left-side__social">
          <h3 class="left-side__heading-tertiary">Website & Social Links</h3>
          <ul class="left-side__list">
            <li>
              <a
                class="left-side__link"
                href="https://www.linkedin.com/in/vasil-dimov-a868a720a/"
                target="_blank"
                >LinkedIn</a
              >
            </li>
            <li>
              <a class="left-side__link" href="http://localhost:1234/home" target="_blank">Website</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
