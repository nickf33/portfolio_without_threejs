import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
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

const imageDivs = document.querySelectorAll(".scroll__image");

imageDivs.forEach((div, idx) => {
  div.style.backgroundImage = `url(${images[idx]})`;
});

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

gsap.registerPlugin(ScrollTrigger);

/* Hero Animations */

function titleAnimation() {
  const titles = document.querySelectorAll(".anim__text");
  titles.forEach((item, i) => {
    const text = new SplitType(item, { types: "chars" });
    gsap.from(text.chars, {
      y: "100%",
      stagger: 0.01,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        scrub: false,
        markers: false,
      },
    });
  });

  gsap.from(".hero__icon", {
    opacity: 0,
    duration: 0.5,
    ease: "power.in",
    y: "100%",
  });
}

function imageAnimation() {
  gsap.from(".hero__img__mask", {
    width: "0",
    delay: 0.6,
    duration: 1,
    ease: "power4.out",
  });
}

titleAnimation();
imageAnimation();

/* About Animation */

const splitScroll = document.querySelectorAll(".scroll__reveal");
splitScroll.forEach((char, idx) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.from(text.chars, {
    opacity: 0.1,
    y: 200,
    stagger: 0.1,
    duration: 20,
    ease: "power4.out",
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 0%",
      scrub: true,
      markers: false,
    },
  });

  /* Button Animation */
  const btnTrigger = document.querySelectorAll(".btn__wrap");
  const btnLines = document.querySelectorAll(".btn__line");
  const btns = document.querySelectorAll(".btn");

  btnLines.forEach((line, idx) => {
    gsap.from(line, {
      ease: "power4.out",
      duration: 2,
      x: "-100%",
      scrollTrigger: {
        trigger: btnTrigger[idx],
        start: "top 100%",
        scrub: false,
        markers: false,
      },
    });
  });

  btns.forEach((btn, idx) => {
    gsap.to(btn, {
      ease: "power4.out",
      opacity: 1,
      delay: 0.25,
      duration: 0.1,
      scrollTrigger: {
        trigger: btnTrigger[idx],
        start: "top 100%",
        scrub: false,
        markers: false,
      },
    });
  });

  /* Work */

  const workItemContainer = document.querySelectorAll(".work__item__wrap");
  const workItemMask = document.querySelectorAll(".img__mask");
  const workItemNum = document.querySelectorAll(".work__num");
  const workImage = document.querySelectorAll(".work__item__img");
  const workTitle = document.querySelectorAll(".work__item__title");
  const workDetail = document.querySelectorAll(".work__item__detail");
  const topBorder = document.querySelectorAll(".top__border");

  topBorder.forEach((border, idx) => {
    gsap.from(border, {
      ease: "power4.out",
      duration: 2,
      x: "-100%",
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 100%",
        scrub: false,
        markers: false,
      },
    });
  });

  workItemMask.forEach((mask, idx) => {
    gsap.from(mask, {
      ease: "power4.out",
      duration: 2,
      height: 0,
      delay: 0,
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 80%",
        scrub: false,
        markers: false,
      },
    });
  });

  workItemNum.forEach((num, idx) => {
    gsap.from(num, {
      ease: "power4.out",
      duration: 2,
      delay: 0.2,
      y: 100,
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 80%",
        scrub: false,
        markers: false,
      },
    });
  });

  workTitle.forEach((title, idx) => {
    gsap.from(title, {
      y: 200,
      opacity: 0,
      duration: 2,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 20%",
        scrub: false,
        markers: false,
      },
    });
  });

  workDetail.forEach((detail, idx) => {
    gsap.from(detail, {
      y: 200,
      duration: 2,
      delay: 0.7,
      ease: "power4.out",
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 20%",
        scrub: false,
        markers: false,
      },
    });
  });

  workImage.forEach((img, idx) => {
    gsap.from(img, {
      scale: 1.2,
      duration: 2,
      ease: "power.out",
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 100%",
        end: "top -1000%",
        scrub: false,
        markers: false,
      },
    });
  });

  workImage.forEach((img, idx) => {
    gsap.from(img, {
      yPercent: -20,
      ease: "power4.out",
      scrollTrigger: {
        trigger: workItemContainer[idx],
        start: "top 100%",
        end: "top -1000%",
        scrub: true,
        markers: false,
      },
    });
  });

  workImage.forEach((img, idx) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });
  });
});
