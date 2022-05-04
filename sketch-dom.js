const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let img;
let url;
url = window.prompt("Enter link to image: ");

function preload() {
  img = loadImage(url);
}

function setup() {
  noCanvas();
  img.resize(100, 100);
  img.loadPixels();
  for (let j = 0; j < img.height; j++) {
    let row = "";
    for (let i = 0; i < img.width; i++) {
      let index = (i + j * img.width) * 4;
      let red = img.pixels[index];
      let green = img.pixels[index + 1];
      let blue = img.pixels[index + 2];

      let average = (red + blue + green) / 3;

      const len = density.length - 1;
      const charIndex = Math.floor(map(average, 0, 255, len, 0));

      chr = density.charAt(charIndex);
      row += chr == " " ? "&nbsp;" : chr;
    }
    createDiv(row);
  }
}
