(function () {
  const pageTitle = "Vasil Dimov";
  const main = document.getElementById("content");

  const scriptsSet = new Set();

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
        loadPage(info, "studies.js");
        break;
      case "/projects":
        // Load content from projects.html
        loadPage(info);
        break;
      case "/resume":
        // Load content from resume.html
        loadPage(info, ["resume.js"]);
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

  async function loadPage(info, ...scripts) {
    // Fetch the template and extract the content
    const html = await fetch(info.template).then((res) => res.text());
    // Set the full HTML content, including the script tags
    const content = html;

    document.title = info.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", info.description);

    // Add the content to the target document
    main.innerHTML = content;

    if (scripts) {
      scripts.forEach((script) => {
        if (scriptsSet.has(script)) return;

        scriptsSet.add(script);
        const scriptEl = document.createElement("script");
        scriptEl.src = `./scripts/${script}`;
        document.body.appendChild(scriptEl);
      });
    }
  }
})();
