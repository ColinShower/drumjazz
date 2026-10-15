let beat, analyzer;

function preload() {
    beat = loadSound('jazz.mp3');
}

function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('myContainer');
    
    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    analyzer.setInput(beat);
}

function mousePressed() {
    if (beat.isPlaying()) {
        beat.stop();
    } else {
        beat.loop();
    }
}

function draw() {

    background('#F2ADA7');

    erase();
    ellipse(width / 2 + 100, height / 2 + 300, 220, 220); //1
    ellipse(width / 2, height / 2, 220, 220); //2
    noErase();
    
    // Get the average (root mean square) amplitude
    let rms = 0
    if (analyzer.getLevel()){
        rms = analyzer.getLevel();
    }
    
    fill('#D90B0B');
    stroke('#D95A4E');

    // Draw an ellipse with size based on volume
    ellipse(width / 2 + 100, height / 2 + 300, 10 + rms * 200, 10 + rms * 200);

    noStroke(); 
    fill('#EFF2D8'); 
    ellipse(width / 2, height / 2, 10 + rms * 100, 10 + rms * 100);
}
