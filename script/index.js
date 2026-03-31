const nav = document.querySelector("#header nav");
const toggle = document.querySelector(".toggle");
const navLinks = document.querySelectorAll("#header nav a");
const body = document.body;

// Abrir/Fechar menu ao clicar no hamburger
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggle.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    toggle.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

// Fechar menu ao clicar no overlay
nav.addEventListener("click", (e) => {
  if (e.target === nav || e.target.tagName === "nav") {
    nav.classList.remove("show");
    toggle.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    nav.classList.remove("show");
    toggle.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

// Fechar menu ao clicar fora (no overlay)
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("show");
    toggle.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

function changeHeaderScroll() {
  const header = document.querySelector("#header");
  header.classList.toggle("scroll", window.scrollY >= 100);
}

const scroll = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 900,
  delay: 100,
  easing: "cubic-bezier(0.65, 0, 0.35, 1)",
  reset: false,
  mobile: true,
});

scroll.reveal("#home .container > div:first-child, #home .container .image", {
  origin: "left",
  distance: "60px",
  duration: 1000,
  delay: 150,
});
scroll.reveal("#about .container > div, #service .wrapper_card", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  interval: 120,
});
scroll.reveal("#partners .container > div", {
  origin: "left",
  distance: "40px",
  duration: 900,
  interval: 120,
});
scroll.reveal("#depoiments .wrapper > div", {
  origin: "right",
  distance: "40px",
  duration: 900,
  interval: 120,
});
scroll.reveal("#footer .nav, #footer .mobile", {
  origin: "bottom",
  distance: "30px",
  duration: 800,
  interval: 60,
});

window.addEventListener("scroll", function () {
  changeHeaderScroll();
});
