let faceSize = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  translate(width/2, height/2);
  //face
  fill (255, 0, 0);
  ellipse(0, 0, faceSize, faceSize);
  
  //eyes
  let xEye = 40;
  let yEye = 30;
  fill (255);
  ellipse (-xEye, -yEye, 30, 30);
  ellipse (xEye, -yEye, 30, 30);
  fill (0);
  ellipse (-xEye, -yEye, 15, 15);
  ellipse (xEye, -yEye, 15, 15);
  
  //nose
  rect(-5, -5, 15, 40, 20);
  

  //mouth
  noFill ();
  stroke (0);
  let xAnchor = 50;
  let yAnchor = 40;
  let xControl = 40;
  let yControl = 60;
  
  
  let pt1 = createVector(-xAnchor, yAnchor);
  let pt2 = createVector(-xControl, yControl);
  let pt3 = createVector(xControl, yControl);
  let pt4 = createVector(xAnchor, yAnchor);
  
  bezier (pt1. x, pt1. y, pt2. x, pt2. y, pt3. x, pt3. y, pt4. x, pt4. y,)


}