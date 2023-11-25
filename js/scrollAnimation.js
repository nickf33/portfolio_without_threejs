import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../images/scroll/scroll-img1.png";
import image2 from "../images/scroll/scroll-img2.png";
import image3 from "../images/scroll/scroll-img3.png";
import image4 from "../images/scroll/scroll-img4.png";
import image5 from "../images/scroll/scroll-img5.png";
import image6 from "../images/scroll/scroll-img6.png";
import image7 from "../images/scroll/scroll-img7.png";
import image8 from "../images/scroll/scroll-img8.png";
import image9 from "../images/scroll/scroll-img9.png";
import image10 from "../images/scroll/scroll-img10.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];
gsap.registerPlugin(ScrollTrigger);

const imageDivs = document.querySelectorAll(".scroll__image");

imageDivs.forEach((div, idx) => {
  div.style.backgroundImage = `url(${images[idx]})`;
});

// old path animation - too jittery
// let textPath1 = document.getElementById("path1");
// let textPath2 = document.getElementById("path2");

// function updateTextPathOffset(offset) {
//   textPath1.setAttribute("startOffset", offset);
//   textPath2.setAttribute("startOffset", offset);
// }

// function onScroll() {
//   requestAnimationFrame(function () {
//     updateTextPathOffset(window.scrollY / 3);
//   });
// }

// window.addEventListener("scroll", onScroll);

gsap.registerPlugin(ScrollTrigger);

function updateStartOffset() {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  const startOffsetValue1 = 3000 - scrollPercent * 20; // Adjust the multiplier as needed
  document
    .getElementById("path1")
    .setAttribute("startOffset", startOffsetValue1);

  // const startOffsetValue2 = 3000 - scrollPercent * 20; // Adjust the multiplier as needed
  // document
  //   .getElementById("path2")
  //   .setAttribute("startOffset", startOffsetValue2);
}

gsap.from("#curve__path1", {
  scrollTrigger: {
    trigger: "#curve1",
    start: "top 100%", // Adjust the start trigger as needed
    end: "bottom -100%",
    scrub: true,
    onUpdate: updateStartOffset,
    ease: "Power4.out", // Call the function on each scroll update
  },
});

// gsap.from("#curve__path2", {
//   scrollTrigger: {
//     trigger: "#curve2",
//     start: "top 100%", // Adjust the start trigger as needed
//     end: "bottom -100%",
//     scrub: true,
//     onUpdate: updateStartOffset,
//     ease: "Power4.out", // Call the function on each scroll update
//   },
// });

updateStartOffset();

gsap.from("#top__track", {
  scrollTrigger: {
    trigger: ".image__scroll__wrap",
    start: "top 100%",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
  x: "-20%",
  ease: "power4.Out",
});

gsap.to("#btm__track", {
  scrollTrigger: {
    trigger: ".image__scroll__wrap",
    start: "top 100%",
    end: "bottom -100%",
    scrub: true,
    markers: false,
  },
  x: "-20%",
  ease: "power4.Out",
});
