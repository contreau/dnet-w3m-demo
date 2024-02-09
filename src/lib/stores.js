// state
const dreams = [];
const conjurations = [];
const essence = [];
let participants = 0;
let threshold = 0;

// Smoothly transitions between components
function replaceComponent(current, replacement) {
  current.style.opacity = 0;
  current.style.transitionDuration = "0.3s";
  setTimeout(() => {
    current.replaceWith(replacement);
  }, 300);
}

export default {
  dreams,
  conjurations,
  essence,
  participants,
  threshold,
  replaceComponent,
};