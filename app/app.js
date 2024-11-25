document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  function initListeners() {
    $(".nav a").on("click", function (e) {
      let id = e.currentTarget.id;
      console.log(id);
      $("#app").html(id);
      nav.classList.toggle("active");
    });

    $(".nav").on("click", function (e) {
      nav.classList.toggle("active"); /*or remove*/
    });
  }

  $(document).ready(function () {
    initListeners();
  });
});
