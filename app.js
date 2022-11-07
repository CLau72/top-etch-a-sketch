const CANVASSIZE = 720;
const canvas = document.getElementById("canvas")

function createCanvas(pixelSize)  {
  console.log("Creating Canvas")
  const pixelsPerPixel = Math.sqrt(Math.pow(CANVASSIZE,2) / Math.pow(pixelSize,2))
  for (let i = 0; i < Math.pow(pixelSize,2); i++) {
    const pixel = document.createElement("div");
    pixel.classList.add('pixel')
    pixel.style.width = `${pixelsPerPixel}px`;
    pixel.style.height = `${pixelsPerPixel}px`;
     canvas.appendChild(pixel);
  }
};

createCanvas(100);

const pixel = document.querySelectorAll('.pixel');

pixel.forEach((pixel) => {
  pixel.addEventListener('mouseover', () => {
    pixel.classList.add("dark");
  });
});

