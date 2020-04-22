function preload(){
    pianoSound = loadSound('sounds/piano.wav');
    applauseSound = loadSound('sounds/applause.wav');
    footstepsSound = loadSound('sounds/footsteps.wav');
    gongSound = loadSound('sounds/gong.wav');
    sonarSound = loadSound('sounds/sonar.wav');
  }
  
  function setup() {
    createCanvas(800, 650);
    amplitude = new p5.Amplitude();
  }
  
  function draw() {
    background(204, 204, 0);
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);
    fill("pink");
    stroke("noStroke");
    ellipse(150, 350, size * 15, size * 15);
  }
  
  function playPiano(){
    if (pianoSound.isPlaying()) {
        pianoSound.stop();
    } else {
        pianoSound.play();
    }
  }
  function playApplause(){
    if (applauseSound.isPlaying()) {
        applauseSound.stop();
    } else {
        applauseSound.play();
    }
  }
  function playFootsteps(){
    if (footstepsSound.isPlaying()) {
        footstepsSound.stop();
    } else {
        footstepsSound.play();
    }
  }
  function playGong(){
    if (gongSound.isPlaying()) {
        gongSound.stop();
    } else {
        gongSound.play();
    }
  }
  function playSonar(){
    if (sonarSound.isPlaying()) {
        sonarSound.stop();
    } else {
        sonarSound.play();
    }
  }
