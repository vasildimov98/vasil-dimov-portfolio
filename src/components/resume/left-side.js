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
          <p class="paragraph left-side__paragraph">I bring a passion for problem-solving and a dedication to delivering high-quality solutions. With a strong educational background and hands-on experience, I possess a deep understanding of software development principles and best practices. I excel in collaborating with cross-functional teams to analyze requirements, design innovative solutions, and implement robust applications. I consistently strive for excellence in all aspects of my work.</p>
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
