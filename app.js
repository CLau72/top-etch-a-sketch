const CANVASSIZE = 720;
const canvas = document.getElementById("canvas");
const clearBtn = document.getElementById("clear-btn");
const pixelSlider = document.getElementById("pixel-slider");
const resizeBtn = document.getElementById("resize-btn")


// Create the canvas with square divs based on how many pixels you want for the length and width
function createCanvas(pixelSize)  {
  console.log("Creating Canvas")
  // remove any pre-existing divs
  canvas.innerHTML = "";
  const pixelsPerPixel = Math.sqrt(Math.pow(CANVASSIZE,2) / Math.pow(pixelSize,2))
  for (let i = 0; i < Math.pow(pixelSize,2); i++) {
    const pixel = document.createElement("div");
    pixel.classList.add('pixel')
    pixel.style.width = `${pixelsPerPixel}px`;
    pixel.style.height = `${pixelsPerPixel}px`;
     canvas.appendChild(pixel);
  }

  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
  pixel.addEventListener('mouseenter', () => {
    pixel.classList.add("dark");
  });
}); 
};

// Turn all pixels white again
function clearCanvas() {
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.classList.remove("dark");
  })
}

// When the resize button is cliked, take the slider value and resize
function resizeCanvas() {
  createCanvas(pixelSlider.value);
}


// Create initial canvas
createCanvas(16);

clearBtn.addEventListener('click', clearCanvas)
resizeBtn.addEventListener('click', resizeCanvas)

