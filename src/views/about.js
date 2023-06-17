import { html } from "lit";

function toggleHeader(e) {
  if (!e.currentTarget.classList.contains("studies__header")) return;

  const studiesHeader = e.currentTarget;

  const icon = studiesHeader.querySelector("i");

  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-right");
  } else {
    icon.classList.remove("fa-chevron-right");
    icon.classList.add("fa-chevron-down");
  }

  studiesHeader.nextElementSibling.classList.toggle("hidden");
}

export default () => html`
  <header class="header">
    <h1 class="heading-primary">Hello, nice to meet you!</h1>
    <p class="paragraph">
      Welcome to my story! On this page, you can learn more about me, my
      background, and my experience as a software engineer.
    </p>
    <img
      class="header__cartoon u-margin-top-medium"
      src="../images/myself/vasil.jpeg"
      alt="Picture of myself"
    />
  </header>

  <section class="about u-max-width-big-center">
    <h2 class="heading-secondary">01. About me</h2>

    <p class="about__text paragraph u-margin-top-small">
      As a college student, I studied business and found it interesting, but
      something was missing. One day, I came across a free programming course
      and decided to try it out. As I began to learn about coding, I became
      fascinated by the problem-solving and logical thinking involved.
    </p>
    <p class="about__text paragraph u-margin-top-small">
      While completing my bachelor's degree, I continued to study programming in
      my free time. I took courses and taught myself different programming
      languages, determined to turn my newfound passion into a career.
    </p>
    <p class="about__text paragraph u-margin-top-small">
      After graduation, I continued to learn and hone my skills. Although I had
      no professional experience at the time, I was determined to become a
      software engineer. I worked hard, never giving up on my dream.
    </p>
    <p class="about__text paragraph u-margin-top-small">
      Eventually, my dedication paid off, and I landed my first job as a
      software engineer. Although I am still relatively new to the field, I have
      gained valuable experience working on various projects, each one
      challenging me to become a better programmer.
    </p>
    <p class="about__text paragraph u-margin-top-small">
      Recently, I created a personal website to showcase my work and projects.
      It's a platform where I can share my passion for software engineering with
      others and demonstrate what I've learned along the way. Despite the
      challenges that come with being a software engineer, I know that I made
      the right decision by following my passion and pursuing a career in this
      field.
    </p>
  </section>

  <section class="work u-max-width-big-center u-margin-top-medium">
    <h2 class="heading-secondary">02. Work experience</h2>

    <div class="work__container">
      <h4 class="heading-quaternary">
        <span class="work__title">Quantive (formerly Gtmhub)</span>
      </h4>

      <div class="work__description">
        <h3 class="heading-tertiary">
          Software Engineer
          <a class="work__link" href="https://quantive.com/" target="_blank"
            >@ Quantive</a
          >
        </h3>
        <p class="work__date">Nov 2021 - Present</p>
        <ul class="work__aspects">
          <li class="work__aspect">
            <i class="fas fa-chevron-right work__icon"></i>
            <p>
              Working on maintaining and adding new feature to a OKRs based
              platform. The platform is used by companies to track their goals
              and objectives. The platform is built with Angular. The backend is
              built with Golang.
            </p>
          </li>
          <li class="work__aspect">
            <i class="fas fa-chevron-right work__icon"></i>
            <p>
              Work alongside an inspiring team of engineers. They are always
              willing to help and share their knowledge.
            </p>
          </li>
          <li class="work__aspect">
            <i class="fas fa-chevron-right work__icon"></i>
            <p>
              Collaborate with the product team and designers to create a great
              user experience.
            </p>
          </li>
          <li class="work__aspect">
            <i class="fas fa-chevron-right work__icon"></i>
            <p>
              Working in environment where I learn new things everyday. I am
              constantly challenged to become a better engineer.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="studies u-max-width-big-center u-margin-top-medium">
    <h2 class="heading-secondary">03. Studies</h2>

    <div class="studies__container u-margin-top-small">
      <div class="studies__header" @click="${toggleHeader}">
        <i class="fas fa-chevron-right studies__icon"></i>
        <h4 class="heading-tertiary">Udemy</h4>
        <p class="studies__date">
          <i class="fas fa-calendar studies__icon"></i> 2022 - Present
        </p>
      </div>

      <ul class="studies__content u-margin-top-small hidden">
        <li class="studies__item">
          <a
            href="https://quantive.udemy.com/course/react-the-complete-guide-incl-redux/"
            target="_blank"
            class="studies__link heading-quaternary"
            >React - The Complete Guide (incl Hooks, React Router, Redux)
          </a>
          <p class="paragraph">
            React is a popular JavaScript library used for building user
            interfaces, and by taking this course, I'll be learning how to use
            React to create dynamic and interactive web applications.
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://quantive.udemy.com/course/the-complete-javascript-course/"
            target="_blank"
            class="studies__link heading-quaternary"
          >
            The Complete JavaScript Course 2021: From Zero to Expert!
          </a>
          <p class="paragraph">
            JavaScript is a programming language that allows developers to
            create dynamic web pages. By taking this course, I'll be learning
            how to use JavaScript to create interactive websites and web
            applications.
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://quantive.udemy.com/course/data-structures-algorithms-javascript/"
            target="_blank"
            class="studies__link heading-quaternary"
            >JavaScript Data Structures & Algorithms</a
          >
          <p class="paragraph">
            Data structures and algorithms are essential for any programmer. By
            taking this course, I'll be learning how to use JavaScript to create
            data structures and algorithms.
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://quantive.udemy.com/course/advanced-css-and-sass/"
            target="_blank"
            class="studies__link heading-quaternary"
          >
            Advanced CSS and Sass: Flexbox, Grid, Animations and More!
          </a>
          <p class="paragraph">
            CSS is a programming language used to style web pages. By taking
            this course, I'll be learning how to use CSS to create beautiful and
            responsive websites
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://quantive.udemy.com/course/angular-course/"
            target="_blank"
            class="studies__link heading-quaternary"
            >Angular Core Deep Dive - Beginner to Advanced (Angular 16)
          </a>
          <p class="paragraph">
            Angular is a popular JavaScript framework used for building web
            applications.
          </p>
        </li>
      </ul>
    </div>

    <div class="studies__container u-margin-top-small">
      <div class="studies__header">
        <i class="fas fa-chevron-right studies__icon"></i>
        <h4 class="heading-tertiary">SoftUni</h4>
        <p class="studies__date">
          <i class="fas fa-calendar studies__icon"></i>2019 - 2021
        </p>
      </div>

      <ul class="studies__content u-margin-top-small hidden">
        <li class="studies__item">
          <a
            href="https://softuni.bg/trainings/2428/programming-basics-with-csharp-september-2019"
            class="studies__link heading-quaternary"
            >Entry Module - Programming Basics with C#
          </a>
          <p class="paragraph u-margin-top-small">
            My journey as a software developer began with the entry module at
            SoftUni, where I learned the basics of programming with C#. It was
            during this time that I became hooked and discovered my passion for
            coding. SoftUni provided the foundation for my professional growth,
            and I'm grateful for the opportunity that set me on this fulfilling
            journey.
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://softuni.bg/trainings/2830/csharp-fundamentals-may-2020"
            target="_blank"
            class="studies__link heading-quaternary"
          >
            C# Fundamentals
          </a>
          <p class="paragraph u-margin-top-small">
            The course offered a comprehensive introduction to the basics of C#
            programming language, equipping me with essential knowledge and
            skills to build robust applications. Through a combination of
            insightful lectures, hands-on coding exercises, and practical
            examples, I gained a solid understanding of fundamental concepts
            such as variables, data types, control structures.
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://softuni.bg/trainings/2835/csharp-oop-june-2020"
            target="_blank"
            class="studies__link heading-quaternary"
            >C# Advanced</a
          >
          <p class="paragraph u-margin-top-small">
            This course delved deep into the intricacies of the C# language,
            exploring advanced concepts and techniques that are essential for
            developing sophisticated applications. Through intensive lessons and
            hands-on projects, I gained an in-depth understanding of topics such
            as LINQ (Language Integrated Query), asynchronous programming,
            multithreading, generics, reflection, and advanced object-oriented
            programming patterns.
          </p>
        </li>
        <li class="studies__item">
          <a
            href="https://softuni.bg/trainings/3354/asp-dot-net-core-june-2021"
            target="_blank"
            class="studies__link heading-quaternary"
          >
            C# Web - ASP.NET Core
          </a>
          <p class="paragraph u-margin-top-small">
            Through a comprehensive course, I gained invaluable knowledge and
            practical skills to create dynamic web applications using C# and
            ASP.NET framework. The course covered essential topics such as web
            development basics, HTML, CSS, JavaScript, and then seamlessly
            transitioned into server-side programming with C# and ASP.NET. I
            learned how to leverage the power of ASP.NET MVC
            (Model-View-Controller) architecture to design scalable and
            maintainable web applications.
          </p>
        </li>
      </ul>
    </div>

    <div class="studies__container u-margin-top-small">
      <div class="studies__header">
        <i class="fas fa-chevron-right studies__icon"></i>
        <h4 class="heading-tertiary">
          VUZF - University of finance, business and entrepreneurship
        </h4>
        <p class="studies__date">
          <i class="fas fa-calendar studies__icon"></i>2017 - 2021
        </p>
      </div>

      <ul class="studies__content u-margin-top-small hidden">
        <li class="studies__item">
          <a
            href="https://vuzf.bg/candidate-students/bakalavar/nova-informatsionni-tehnologii-i-biznes-menidzhmantbrdiv-stylecolorrgb22815929savmestna-programa-s-velikotarnovski-universitet-sv-sv-kiril-i-metodiydiv"
            target="_blank"
            class="studies__link heading-quaternary"
            >IT Analysis and Business Strategy
          </a>
          <p class="paragraph u-margin-top-small u-mar">
            During my pursuit of a bachelor's degree, I embarked on a
            comprehensive program called IT Analysis and Business Strategy,
            which provided a well-rounded education in the fields of economics,
            finance, marketing, HR, and more. In the initial three years of my
            studies, I focused on developing a strong foundation in fundamental
            areas of business. I gained a deep understanding of economics
            principles, financial analysis techniques, marketing strategies, and
            effective human resource management. These years laid the groundwork
            for my future endeavors in the world of business.
          </p>
          <p class="paragraph u-margin-top-small">
            As I progressed further in my program, I had the opportunity to
            specialize in the captivating realm of data analysis and business
            strategy. This phase of my education revolved around honing my
            analytical skills and understanding the pivotal role of data in
            decision-making processes. I delved into various data analysis
            techniques, learning how to extract meaningful insights from complex
            datasets. This knowledge empowered me to identify trends, uncover
            patterns, and make informed strategic decisions that could drive
            organizational success.
          </p>
          <p class="paragraph u-margin-top-small">
            Moreover, the program emphasized the integration of technology and
            business acumen. I gained proficiency in utilizing cutting-edge IT
            tools and platforms to collect, analyze, and interpret data. By
            leveraging this technological prowess, I acquired the ability to
            develop comprehensive business strategies that aligned with
            organizational goals, optimize processes, enhance customer
            experiences, and drive growth.
          </p>
          <p class="paragraph u-margin-top-small">
            Throughout my bachelor's degree program, I actively engaged in
            practical projects, collaborating with peers and industry
            professionals to tackle real-world business challenges. These
            experiences not only strengthened my analytical and problem-solving
            skills but also equipped me with effective communication and
            teamwork abilities.
          </p>
          <p class="paragraph u-margin-top-small">
            Overall, my bachelor's degree in IT Analysis and Business Strategy
            provided me with a solid foundation in economics, finance,
            marketing, and HR, and then propelled me into the world of data
            analysis and business strategy. This comprehensive education has
            equipped me with the necessary skills to navigate the dynamic
            business landscape, analyze data effectively, and devise innovative
            strategies that can drive success and growth for organizations.
          </p>
        </li>
      </ul>
    </div>
  </section>
`;
