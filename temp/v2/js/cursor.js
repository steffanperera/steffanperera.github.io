//cursor

let mouseCursor = document.querySelector(".cursor");
let mouseLinks = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

mouseLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("linkgrow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("linkgrow");
  });
});
