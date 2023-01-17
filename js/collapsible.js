// collapsible menu

const collapsibleMenu = () => {
  const collapsibleIcon = document.querySelector(".collapsible-icon");
  const nav = document.querySelector(".menu");

  collapsibleIcon.addEventListener("click", () => {
    nav.classList.toggle("collapsible-menu-active");
  });
};

collapsibleMenu();
