(function () {
  const pageTitle = "Vasil Dimov";
  const main = document.getElementById("content");

  const homePageInfo = {
    template: "../app/home.html",
    title: `Home Page | ${pageTitle}`,
    description: "This is the home page",
  };

  const routeInfo = {
    "/": homePageInfo,
    "/home": homePageInfo,
    "/about": {
      template: "../app/about.html",
      title: `About Page | ${pageTitle}`,
      description: "This is the about page",
    },
    "/projects": {
      template: "../app/projects.html",
      title: `Projects Page | ${pageTitle}`,
      description: "This is the projects page",
    },
    "/resume": {
      template: "../app/resume.html",
      title: `Resume Page | ${pageTitle}`,
      description: "This is the resume page",
    },
    "/contact": {
      template: "../app/contact.html",
      title: `Contact Page | ${pageTitle}`,
      description: "This is the contact page",
    },
    error: {
      template: "../app/error.html",
      title: `Error Page | ${pageTitle}`,
      description: "This is the error page",
    },
  };

  function navigateTo(url) {
    history.pushState(null, null, url);
    router();
  }

  function router() {
    const path = window.location.pathname;
    main.innerHTML = "";

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Load path or go to home if not found
    const info = routeInfo[path] || routeInfo["/"];

    switch (path) {
      case "/":
        // Load content from home.html
        loadPage(info);
        break;
      case "/home":
        loadPage(info);
        break;
      case "/about":
        // Load content from about.html
        loadPage(info);
        break;
      case "/projects":
        // Load content from projects.html
        loadPage(info);
        break;
      case "/resume":
        // Load content from resume.html
        loadPage(info);
        break;
      case "/contact":
        // Load content from contact.html
        loadPage(info);
        break;
      default:
        // Load content from home.html
        loadPage(info);
        break;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    router();

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(link.href);
      });
    });

    window.addEventListener("popstate", router);
  });

  async function loadPage(info) {
    const html = await fetch(info.template).then((res) => res.text());
    // Extract the content using the DOM API
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const content = doc.querySelector("#content-to-extract").innerHTML;
    document.title = info.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", info.description);

    // Add the content to the target document
    main.innerHTML = content;
  }
})();
