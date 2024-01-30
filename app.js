let button = document.getElementById("button");
let colorChangeInterval;
let progressBarInterval;

function hex() {
  const HexColor = Math.floor(Math.random() * 16777215).toString(16);
  button.style.backgroundColor = "#" + HexColor;
}

button.addEventListener("mouseover", function () {
  hex(); // Start color change on mouseover
  colorChangeInterval = setInterval(hex, 1000);
});

button.addEventListener("mouseout", function () {
  clearInterval(colorChangeInterval); // Stop color change on mouseleave
});

const ProgressBar = (enableColorChange) => {
  let percentageProgress = document.querySelector(".percentage");
  let circle = document.querySelector(".box2");
  let bar = document.querySelector(".box3");
  let bar1 = document.querySelector(".percentage1");
  let start = 0;
  let end = 100;
  let speed = 100;

  progressBarInterval = setInterval(() => {
    if (start < end) {
      start++;
      percentageProgress.textContent = `${start}%`;
      circle.style.background = `conic-gradient(green ${
        3.6 * start
      }deg, white 0deg)`;

      bar.style.width = `${start}%`;
      bar1.textContent = start + "%";
      bar1.leftPosition = start + "%";
      bar1.style.transform = `translateX(100%)`;

      if (start === end) {
        percentageProgress.textContent = "Finished";
        button.style.backgroundColor = "transparent";
        button.style.backgroundImage = "url('celebrations.gif')";
        button.style.backgroundSize = "500px";
      }
    } else {
      clearInterval(progressBarInterval);
      clearInterval(colorChangeInterval); // Stop color change when progress bar is complete
    }
  }, speed);
};
