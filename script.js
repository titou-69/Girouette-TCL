const lineInput = document.getElementById("lineInput");
const destinationInput = document.getElementById("destinationInput");

const lineNumber = document.getElementById("lineNumber");
const destination = document.getElementById("destination");

document.getElementById("updateBtn").addEventListener("click", () => {
    lineNumber.textContent = lineInput.value;
    destination.textContent = destinationInput.value;
});

document.getElementById("fullscreenBtn").addEventListener("click", () => {
    document.documentElement.requestFullscreen();
});

lineInput.addEventListener("input", updateDisplay);
destinationInput.addEventListener("input", updateDisplay);

function updateDisplay() {
    lineNumber.textContent = lineInput.value;
    destination.textContent = destinationInput.value;
}
