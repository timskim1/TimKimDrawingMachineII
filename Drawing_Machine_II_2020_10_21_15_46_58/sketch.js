//TURN UP COMPUTER VOLUME

var amp;
let img;
var c;

//image spacing
let brushCounterLimit = 3;
let brushCounter = 0;

function preload() {
  img = loadImage('data/meryllllll.png');
  song = loadSound('data/MerylStreepAudio.mp3')
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(246, 180, 208);
  
  //play audio & get amplitude
  song.play();
  song.loop();
  amp = new p5.Amplitude();
  
}

function draw() {
  //Audio Map
  var vol = amp.getLevel();
  h = vol
  h = map(vol, 0, 0.3, 100, 300);
  
  //print(h);
  
  //image spacing
  incrementBrushCounter();
  if (brushCounter == 0){
  //tint(255, h)
  image(img, mouseX-80, mouseY-100, h, h);
  }
  
  //Blend Mode toggle
  if (h>200){
    blendMode(OVERLAY);
  } else {
    blendMode(BLEND);
  }
  
  //Type
  if (mouseIsPressed){
  fill(255);
  textFont('Helvetica');
  textStyle(BOLD);
  textSize(40);
  text("You know what I did? I did scream. — Meryl Streep", mouseX+30, mouseY, 600, 400);
  }
}

function incrementBrushCounter(){
  brushCounter++;
  if (brushCounter > brushCounterLimit){
    brushCounter = 0;
  }
}

function keyReleased () {
if (key == "s") {
    saveCanvas (c, 'myCanvas' + frameCount + '.jpg', '.jpg');
  }
}