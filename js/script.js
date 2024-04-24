console.log("script.js running");

const startButton = document.querySelector(".start-button");
const car = document.querySelector(".car");
const road = document.querySelector(".road");
const treesFg = document.querySelector(".trees-fg");
const treesBg = document.querySelector(".trees-bg");
const cloudContainer = document.querySelector(".cloud-container")
const moon = document.querySelector(".moon");
const logoText = document.querySelector(".logo_text");
const logoEarL = document.querySelector(".logo_ear-l");
const logoEarR = document.querySelector(".logo_ear-r");
const logoTeeth = document.querySelector(".logo_teeth");

startButton.addEventListener("click", startGame)

function startGame() {

    // Start button flash and fade out
    startButton.classList.add("start-button-clicked");

    car.classList.add("car-move-off");
    
    // After car moves off, hide car and stop trees-scroll/zoom out.
    car.addEventListener("animationend", () => {car.style.display = "none";
    treesBg.classList.add("trees-bg-zoom-out");
    treesFg.classList.add("trees-fg-zoom-out");
    road.classList.add("road-zoom-out");
    moon.classList.add("moon-up");
    // Logo animation
    logoText.classList.add("logo_text-reveal");
    })

}