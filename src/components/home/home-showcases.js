import { LitElement, html } from "lit";

const SHOWCASE_PROJECTS = [
  {
    image: "../images/projects/joke.png",
    imageAlt: "The Joke Button project",
    title: "The Joke Button",
    description:
      "The Joke Button is a web application that provides you with a quick and easy way to enjoy some good humor. With a simple click of a button, this application will display a random joke from our collection of jokes.",
    link: "https://vasildimov98.github.io/04.tell-me-a-joke",
  },
  {
    image: "../images/projects/infinite.png",
    imageAlt: "Infinite Scroll project",
    title: "Infinite Scroll",
    description:
      "The Infinite Scroll is a web application that provides you with a quick and easy way to enjoy a collection of images. You can scroll all day long and the images will keep on coming.",
    link: "https://vasildimov98.github.io/02.Infinite-scroll"
  },
  {
    image: "../images/projects/paint.png",
    imageAlt: "The Paint Copy project",
    title: "The Paint Copy",
    description:
      "Have you ever wanted to draw something but you didn't have a pen and paper? Well, now you can do it with our web application. The Paint Copy is a web application that provides you with a quick and easy way to draw it right away.",
    link: "https://vasildimov98.github.io/19.paint-clone/"
  },
];

export class HomeShowcases extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="u-max-width-big-center">${this._showcases()}</div>
    `;
  }

  _showcases() {
    return SHOWCASE_PROJECTS.map((project, index) => {
      const reverse = index % 2 !== 0;
      return html`
        <showcase-project
          image=${project.image}
          imageAlt=${project.imageAlt}
          title=${project.title}
          description=${project.description}
          link=${project.link}
          reverse=${reverse}
        ></showcase-project>
      `;
    });
  }
}
