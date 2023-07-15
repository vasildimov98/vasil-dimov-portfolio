import { html } from "lit";

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
      <study-type
        title="Udemy"
        period="2022 - Present"
        .studies=${[
          {
            title:
              "React - The Complete Guide (incl Hooks, React Router, Redux)",
            description: `React is a popular JavaScript library used for building user interfaces, and by taking this course, I'll be learning how to use React to create dynamic and interactive web applications.`,
            link: "https://udemy.com/course/react-the-complete-guide-incl-redux/",
          },
          {
            title: "The Complete JavaScript Course 2021: From Zero to Expert!",
            description: `JavaScript is the programming language of the web. It's used to add interactivity to websites, build web applications, and create games. By taking this course, I'll be learning how to use JavaScript to create dynamic and interactive web pages.`,
            link: "https://udemy.com/course/the-complete-javascript-course/",
          },
          {
            title: "JavaScript Algorithms and Data Structures Masterclass",
            description: `Data structures and algorithms are essential for any programmer. By taking this course, I'll be learning how to use JavaScript to create data structures and algorithms.`,
            link: "https://udemy.com/course/data-structures-algorithms-javascript/",
          },
          {
            title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
            description: `CSS is a programming language used to style web pages. By taking this course, I'll be learning how to use CSS to create beautiful and responsive websites.`,
            link: "https://udemy.com/course/advanced-css-and-sass/",
          },
          {
            title: "Angular Core Deep Dive - Beginner to Advanced (Angular 16)",
            description: `Angular is a popular JavaScript framework used for building web
            applications.`,
            link: "https://udemy.com/course/angular-course/",
          },
        ]}
      ></study-type>

      <study-type
        title="SoftUni"
        period="2019 - 2021"
        .studies=${[
          {
            title: "Entry Module - Programming Basics with C#",
            description: `My journey as a software developer began with the entry module at
            SoftUni, where I learned the basics of programming with C#. It was
            during this time that I became hooked and discovered my passion for
            coding. SoftUni provided the foundation for my professional growth,
            and I'm grateful for the opportunity that set me on this fulfilling
            journey.`,
            link: "https://softuni.bg/trainings/2428/programming-basics-with-csharp-september-2019",
          },
          {
            title: "C# Fundamentals",
            description: `The course offered a comprehensive introduction to the basics of C#
            programming language, equipping me with essential knowledge and
            skills to build robust applications. Through a combination of
            insightful lectures, hands-on coding exercises, and practical
            examples, I gained a solid understanding of fundamental concepts
            such as variables, data types, control structures.`,
            link: "https://softuni.bg/trainings/2830/csharp-fundamentals-may-2020",
          },
          {
            title: "C# Advanced",
            description: `This course delved deep into the intricacies of the C# language,
            exploring advanced concepts and techniques that are essential for
            developing sophisticated applications. Through intensive lessons and
            hands-on projects, I gained an in-depth understanding of topics such
            as LINQ (Language Integrated Query), asynchronous programming,
            multithreading, generics, reflection, and advanced object-oriented
            programming patterns.`,
            link: "https://softuni.bg/trainings/2834/csharp-advanced-may-2020",
          },
          {
            title: "C# OOP",
            description: `This course taught me how to use C# to create object-oriented programs. I learned how to use C# to create classes, objects, and methods.`,
            link: "https://softuni.bg/trainings/2835/csharp-oop-june-2020",
          },
          {
            title: "C# Web - ASP.NET Core",
            description: `Through a comprehensive course, I gained invaluable knowledge and
            practical skills to create dynamic web applications using C# and
            ASP.NET framework. The course covered essential topics such as web
            development basics, HTML, CSS, JavaScript, and then seamlessly
            transitioned into server-side programming with C# and ASP.NET. I
            learned how to leverage the power of ASP.NET MVC
            (Model-View-Controller) architecture to design scalable and
            maintainable web applications.`,
            link: "https://softuni.bg/trainings/3354/asp-dot-net-core-june-2021",
          },
        ]}
      ></study-type>

      <study-type
        title="VUZF"
        period="2017 - 2021"
        .studies=${[
          {
            title: "Bachelor's Degree in Information Technology and Business",
            paragraphs: [
              {
                text: "During my pursuit of a bachelor's degree, I embarked on a comprehensive program called IT Analysis and Business Strategy, which provided a well-rounded education in the fields of economics, finance, marketing, HR, and more. In the initial three years of my studies, I focused on developing a strong foundation in fundamental areas of business. I gained a deep understanding of economics principles, financial analysis techniques, marketing strategies, and effective human resource management. These years laid the groundwork for my future endeavors in the world of business.",
              },
              {
                text: "As I progressed further in my program, I had the opportunity to specialize in the captivating realm of data analysis and business strategy. This phase of my education revolved around honing my analytical skills and understanding the pivotal role of data in decision-making processes. I delved into various data analysis techniques, learning how to extract meaningful insights from complex datasets. This knowledge empowered me to identify trends, uncover patterns, and make informed strategic decisions that could drive organizational success.",
              },
              {
                text: "Moreover, the program emphasized the integration of technology and business acumen. I gained proficiency in utilizing cutting-edge IT tools and platforms to collect, analyze, and interpret data. By leveraging this technological prowess, I acquired the ability to develop comprehensive business strategies that aligned with organizational goals, optimize processes, enhance customer experiences, and drive growth.",
              },
              {
                text: "Throughout my bachelor's degree program, I actively engaged in practical projects, collaborating with peers and industry professionals to tackle real-world business challenges. These experiences not only strengthened my analytical and problem-solving skills but also equipped me with effective communication and teamwork abilities.",
              },
              {
                text: "Overall, my bachelor's degree in IT Analysis and Business Strategy provided me with a solid foundation in economics, finance, marketing, and HR, and then propelled me into the world of data analysis and business strategy. This comprehensive education has equipped me with the necessary skills to navigate the dynamic business landscape, analyze data effectively, and devise innovative strategies that can drive success and growth for organizations.",
              },
            ],
            link: "https://vuzf.bg/candidate-students/bakalavar/nova-informatsionni-tehnologii-i-biznes-menidzhmantbrdiv-stylecolorrgb22815929savmestna-programa-s-velikotarnovski-universitet-sv-sv-kiril-i-metodiydiv",
          },
        ]}
      ></study-type>
    </div>
  </section>
`;
