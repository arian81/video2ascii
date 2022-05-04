const density = "N@#W$9876543210?!abc;:+=-,..";
let img;
function preload() {
  img = loadImage("https://i.imgur.com/Hi4wbsc.png");
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0); // set background to black
  //image(img, 0, 0); // load the image

  let w = width / img.width;
  let l = height / img.height;

  img.loadPixels();

  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      let index = (i + j * img.width) * 4;
      let red = img.pixels[index];
      let green = img.pixels[index + 1];
      let blue = img.pixels[index + 2];
      let alpha = img.pixels[index + 3];
      let average = (red + blue + green) / 3;
      noStroke();
      fill(255);

      const len = density.length;
      const charIndex = Math.floor(map(average, 0, 255, len, 0));

      //square(i * w, j * l, w);
      //triangle(i * w, j * l, i * w + w, j * l, i * w + w / 2, j * l + w);
      textSize(w);
      text(density[charIndex], i * w, j * l + l);
    }
  }
}
