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

    <div class="u-max-width-big-center">
      <div class="showcase__container ">
        <img
          class="showcase__image"
          src="../images/projects/joke.png"
          alt="The Joke Button project"
        />
        <div class="showcase__description">
          <h3 class="heading-tertiary">The Joke Button</h3>
          <p class="paragraph">
            The Joke Button is a web application that provides you with a quick
            and easy way to enjoy some good humor. With a simple click of a
            button, this application will display a random joke from our
            collection of jokes.
          </p>
          <a href="#" class="btn">View Project</a>
        </div>
      </div>

      <div class="showcase__container">
        <div class="showcase__description">
          <h3 class="heading-tertiary">The Infinite Scroll</h3>
          <p class="paragraph">
            The Infinite Scroll is a web application that provides you with a
            quick and easy way to enjoy a collection of images. You can scroll
            all day long and the images will keep on coming.
          </p>
          <a href="#" class="btn">View Project</a>
        </div>
        <img
          class="showcase__image"
          src="../images/projects/infinite.png"
          alt="The Recipe Book project"
        />
      </div>

      <div class="showcase__container">
        <img
          class="showcase__image"
          src="../images/projects/paint.png"
          alt="The Recipe Book project"
        />
        <div class="showcase__description">
          <h3 class="heading-tertiary">The Paint Copy</h3>
          <p class="paragraph">
            Have you ever wanted to draw something but you didn't have a pen and
            paper? Well, now you can do it with our web application. The Paint
            Copy is a web application that provides you with a quick and easy
            way to draw it right away.
          </p>
          <a href="#" class="btn">View Project</a>
        </div>
      </div>
    </div>
  </section>
`;
