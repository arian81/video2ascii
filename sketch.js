const density = "Ñ@#W$9876543210?!abc;:+=-,._                                ";

let feed;
let asciiDiv;

function setup() {
  noCanvas();
  feed = createCapture(VIDEO);
  feed.size(100, 100);
  asciiDiv = createDiv();
}

function draw() {
  feed.loadPixels();
  let ascii_feed = "";
  for (let j = 0; j < feed.height; j++) {
    for (let i = 0; i < feed.width; i++) {
      // get the rgb value from pixel array
      let index = (i + j * feed.width) * 4;
      let red = feed.pixels[index];
      let green = feed.pixels[index + 1];
      let blue = feed.pixels[index + 2];

      let average = (red + blue + green) / 3; // turn into black and white mode

      const len = density.length - 1;
      const charIndex = Math.floor(map(average, 0, 255, len, 0));
      // const charIndex = Math.floor(map(average, 0, 255, 0, len)); // inverted

      chr = density.charAt(charIndex);
      ascii_feed += chr == " " ? "&nbsp;" : chr;
    }
    ascii_feed += "<br/>";
  }
  asciiDiv.html(ascii_feed);
}
