const trafficLightEl = document.querySelector("#trafficLight");

// зеленый
function makeGreen() {
  trafficLightEl.style.background = "lightgreen";
  trafficLightEl.removeEventListener("click", makeGreen);
  trafficLightEl.addEventListener("click", makeYellow);
}

//желтый
function makeYellow() {
  trafficLightEl.style.background = "yellow";
  trafficLightEl.removeEventListener("click", makeYellow);
  trafficLightEl.addEventListener("click", makeRed);
}

//красный
function makeRed() {
  trafficLightEl.style.background = "red";
  trafficLightEl.removeEventListener("click", makeRed);
  trafficLightEl.addEventListener("click", makeGreen);
}

//начальное состояние - зеленый
trafficLightEl.addEventListener("click", makeGreen);
