import { LitElement, html } from "lit";

export class HomeProjects extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    console.log("rendering home-projects");
    return html`
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
              The Joke Button is a web application that provides you with a
              quick and easy way to enjoy some good humor. With a simple click
              of a button, this application will display a random joke from our
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
              Have you ever wanted to draw something but you didn't have a pen
              and paper? Well, now you can do it with our web application. The
              Paint Copy is a web application that provides you with a quick and
              easy way to draw it right away.
            </p>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
      </div>
    `;
  }
}
