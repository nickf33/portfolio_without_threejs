import { gsap } from "gsap";

const currentURL = window.location.href;
const navLinksArray = document.querySelectorAll(".link__text");

if (currentURL.endsWith("/about")) {
  navLinksArray[1].classList.add("current__page");
} else if (currentURL.endsWith("/work")) {
  navLinksArray[2].classList.add("current__page");
} else if (currentURL.endsWith("/form")) {
  navLinksArray[3].classList.add("current__page");
} else {
  navLinksArray[0].classList.add("current__page");
}

let path = document.querySelector(".path");

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

let toggle = false;

// Start SVG at bottom of screen
let y = 100;
let c = 100;

function animate() {
  if (toggle) {
    y = lerp(y, 0, 0.055);
    c = lerp(c, 0, 0.075);
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`
    );
  } else {
    y = lerp(y, 100, 0.055);
    c = lerp(c, 100, 0.075);
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`
    );
  }

  requestAnimationFrame(animate);
}

animate();

const menuToggle = document.querySelector(".menu__btn__mask");
const openBtn = document.querySelector("#open__btn");
const closeBtn = document.querySelector("#close__btn");
const logo = document.querySelector(".logo");
const menuWrap = document.querySelector(".menu__wrap");
const navItems = document.querySelectorAll(".menu__link__wrap");
const navBar = document.getElementById("nav__bar");
const contactInfo = document.querySelector(".contact__wrap");

menuToggle.addEventListener("click", () => {
  setTimeout(() => {
    toggle = !toggle;
  }, 300);

  if (toggle) {
    animateNavItemsOut();
    openBtn.classList.remove("hide");
    closeBtn.classList.add("hide");
    logo.classList.remove("dark");
    navBar.classList.remove("nav__fixed");
    contactInfo.classList.add("hide");
    setTimeout(() => {
      menuWrap.classList.add("hide");
      contactInfo.classList.add("display__none");
    }, 1000);
  } else {
    contactInfo.classList.remove("display__none");
    navBar.classList.add("nav__fixed");
    closeBtn.classList.remove("hide");
    openBtn.classList.add("hide");
    animateNavItemsIn();
    setTimeout(() => {
      logo.classList.add("dark");
      menuWrap.classList.remove("hide");
      contactInfo.classList.remove("hide");
    }, 300);
  }

  menuToggle.classList.toggle("active");
});

function animateNavItemsIn() {
  const navItemsArray = Array.from(navItems);
  navItemsArray.forEach((item, idx) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5 + idx / 10,
      }
    );
  });
}

function animateNavItemsOut() {
  console.log("called");
  const navItemsArray = Array.from(navItems);
  navItemsArray.forEach((item, idx) => {
    gsap.to(item, {
      opacity: 0,
    });
  });
}
