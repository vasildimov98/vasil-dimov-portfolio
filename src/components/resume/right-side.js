import { LitElement, html } from "lit";

export class RightSideResume extends LitElement {
  createRenderRoot() {
    return this;
  }

  _works = [
    {
      place: "Quantive (previously Gtmhub)",
      location: "Sofia, Bulgaria",
      date: "2019 - Present",
      position: "Frontend Software Developer",
      description:
        "I am part of the team that is responsible for the development of an OKR (Objectives and Key Results) platform. I am working on the frontend part of the application using Angular and React. I have face the challenge to work with a big codebase and to learn how to work with a big team.",
    },
  ];

  _studies = [
    {
      place: "Udemy",
      location: "Online",
      date: "2019 - Present",
      position:
        "Various Courses (Angular, React, Javascript, Data Structures and Algorithms)",
      description:
        "I have embarked on a journey of self-improvement by enrolling in various online courses. This platform has provided me with a wide array of resources and opportunities to expand my expertise as a software developer. Through these courses, I am dedicated to acquiring new skills, exploring advanced topics, and staying up-to-date with the latest industry trends. By constantly seeking out learning opportunities, I aim to enhance my knowledge and become a more experienced and proficient developer.",
    },
    {
      place: "SoftUni",
      location: "Sofia, Bulgaria",
      date: "2018 - 2019",
      position: "C# Path",
      description:
        "I gained expertise in C# programming through SoftUni's comprehensive courses. Starting with the entry module, I learned the basics and developed a passion for coding. I then pursued advanced courses in C# Fundamentals, Advanced C#, C# OOP, and C# Web - ASP.NET Core",
    },
  ];

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
        <resume-info
          heading="Work Experience"
          .works=${this._works}
        ></resume-info>
        <resume-info heading="Education" .works=${this._studies}></resume-info>
      </div>
    `;
  }
}
