import { timer } from "./src/timer";
import { card } from "./src/cards";

import { mobileCard, slider } from "./src/mobile-cards";

let bubbles_left = document.querySelector(".bubbles_left");
let bubbles_right = document.querySelector(".bubbles_right");

window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bubbles_left.style.transform =
    "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
  bubbles_right.style.transform =
    "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});
