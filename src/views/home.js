import { html } from "lit-html";

export default () => html`
  <header class="header">
    <h1 class="heading-primary">
      Software Engineer, Designer and Coding Enthusiast
    </h1>

    <p class="paragraph">
      Building innovative software solutions that meet your needs and exceed
      your expectations.
    </p>

    <div class="header__cartoon u-margin-top-medium">
      <img
        class="header__picture"
        src="../images/myself/Cartoonify (1).svg"
        alt="Cartoon version of myself"
      />
    </div>

    <div class="header__buttons u-margin-top-huge">
      <button class="btn">Get to know me</button>
      <button class="btn">View My work</button>
      <button class="btn btn--cta">Contact me!</button>
    </div>
  </header>

  <section class="skills u-margin-top-huge">
    <h2 class="heading-secondary">Nice to meet you</h2>

    <ul class="skills__items">
      <li class="skills__item skills__item--1"><span>HTML</span></li>
      <li class="skills__item skills__item--2"><span>CSS</span></li>
      <li class="skills__item skills__item--3"><span>Javascript</span></li>
      <li class="skills__item skills__item--4"><span>Angular</span></li>
      <li class="skills__item skills__item--5"><span>C#</span></li>
      <li class="skills__item skills__item--6"><span>SQL</span></li>
    </ul>
  </section>

  <section class="showcase u-margin-top-huge">
    <div class="showcase__header">
      <h2 class="heading-secondary">Recent Projects</h2>
      <p class="paragraph">
        Here you check my three most recent project. Hope you like them!
      </p>
    </div>

    <home-showcases></home-showcases>
  </section>
`;
