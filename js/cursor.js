const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const speed = 0.09; // Adjust this value for the delay effect

export function moveCursor(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function updateCursor() {
  const dx = (mouseX - cursorX) * speed;
  const dy = (mouseY - cursorY) * speed;

  cursorX += dx;
  cursorY += dy;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(updateCursor);
}

export function addCursorEffect() {
  updateCursor();

  const hoverElements = document.querySelectorAll(".cursor__hover");

  hoverElements.forEach((hoverItem) => {
    hoverItem.addEventListener("mouseover", () => {
      cursor.classList.add("grow");
    });
    hoverItem.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
    });
  });
}
