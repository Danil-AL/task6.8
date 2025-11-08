const greenLight = document.querySelector("#greenLight");
const yellowLight = document.querySelector("#yellowLight");
const redLight = document.querySelector("#redLight");

function setLight(targetLight, color) {
  targetLight.style.background = color;

  if (targetLight !== greenLight) greenLight.style.background = "black";
  if (targetLight !== yellowLight) yellowLight.style.background = "black";
  if (targetLight !== redLight) redLight.style.background = "black";
}

greenLight.addEventListener("click", () => setLight(greenLight, "green"));
yellowLight.addEventListener("click", () => setLight(yellowLight, "yellow"));
redLight.addEventListener("click", () => setLight(redLight, "red"));
