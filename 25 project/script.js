const progress = document.querySelector(".progress");
const percentText = document.querySelector(".percent");

let target = 65;
let current = 0;
let circumference = 440;

const animate = setInterval(() => {
  if (current >= target) {
    clearInterval(animate);
  } else {
    current++;
    let offset = circumference - (current / 100) * circumference;
    progress.style.strokeDashoffset = offset;
    percentText.innerText = current + "%";
  }
}, 20);
