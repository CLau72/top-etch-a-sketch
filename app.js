const CANVASSIZE = 960;
const canvas = document.getElementById("canvas")

function createCanvas(pixelSize)  {
  console.log("Creating Canvas")
  const pixelsPerPixel = Math.sqrt(Math.pow(CANVASSIZE,2) / Math.pow(pixelSize,2))
  for (let i = 0; i <= Math.pow(pixelSize,2); i++) {
    const pixel = document.createElement("div");
    pixel.style.width = `${pixelsPerPixel}px`;
    pixel.style.height = `${pixelsPerPixel}px`;
    pixel.style.background = "blue";
    pixel.innerText = `${i}`
     canvas.appendChild(pixel);
  }

  
};

createCanvas(16);