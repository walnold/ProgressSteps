const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  } else {
      
  }
  
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  } else {
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%';
 
}
