function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    noStroke()
    fill(0)
    quad(50, 50, 650, 50, 650, 650, 50, 650)

    fill(227,222,200)
    beginShape(TESS);
        vertex(150+50, 50);
        vertex(50, 300+50);
        vertex(148+50, 300+50);
        vertex(148+50, 150+50);
        vertex(226+50, 150+50);
        vertex(299+50, 297+50);
        vertex(448+50, 50);
        endShape(CLOSE);

        beginShape(TESS);
        vertex(150+50, 650);
        vertex(299+50, 297+50);
        vertex(374+50, 483+50);
        vertex(452+50, 483+50);
        vertex(452+50, 332+50);
        vertex(650, 332+50);
        vertex(450+50, 650);
        endShape(CLOSE);
}
