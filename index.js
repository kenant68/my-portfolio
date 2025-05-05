function getFocusOnClick(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("data-target");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navbarItems = document.getElementById("navbar-items");

  menuToggle.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
  });

  window.closeMenu = function () {
    navbarItems.classList.remove("active");
  };

  const links = navbarItems.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
});
