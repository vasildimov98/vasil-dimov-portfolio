(async function () {
  const studiesHeader = document.querySelectorAll(".studies__header");
  const contents = document.querySelectorAll(".studies__content");

  studiesHeader.forEach((h) => h.addEventListener("click", toggleHeader));

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
})();
