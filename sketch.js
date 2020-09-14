function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  clear();
  noFill();
  strokeJoin(ROUND);
  translate(width/2,height/2);

  ClockNums(0,0,145,180,4);
  ClockEllipse(0,0,500,4);
  ClockLine(0,0,160,4);

  NumberTime();
}

function NumberTime(){
  const date = new Date(Date.now());
  const time = date.toLocaleTimeString();
  const day = date.toLocaleDateString();
  push();
  textSize(20);
  textFont('monospace');
  fill(0,115,105);
  text(time.split(":")[0], -220, -200);
  fill(0,140,14);
  text(time.split(":")[1], -187, -200);
  fill(2,166,118);
  text(time.split(":")[2], -154, -200);
  fill(100,100,100);
  text(day, -220, -220);
  pop();
}

function ClockNums(p_x,p_y,tab1,tab2,stroksize,shownum){
  for (var i = 0; i < 60; i++){
    push();
    strokeWeight(stroksize);
    angleMode(DEGREES);
    stroke(100,100,100);
    translate(p_x,p_y);
    rotate(-90);
    rotate(i * 6);
    if (i % 5 === 0){
      line(tab1,0,tab2,0);
      if (shownum){
        fill(255,255,255);
        if (i === 5 || i === 0){
          text(i,(tab1+tab2)/2-3,4);
        }else{
          text(i,(tab1+tab2)/2-7,4);
        }
      }
    }else{
      line ((tab1+tab2)/2 - 5,0,(tab1+tab2)/2 + 5,0);
    }
    pop();
  }
}

function ClockEllipse(p_x, p_y, size, strokesize){
  push();
  angleMode(DEGREES);
  translate(p_x,p_y);
  rotate(-90);
  strokeWeight(strokesize);
  stroke(2,166,118);
  arc(0,0,size*0.9,size*0.9,0, map(second(),0,60,0,360));
  stroke(0,140,14);
  arc(0,0,size*0.85,size*0.85,0, map(minute(),0,60,0,360));
  stroke(0,115,105);
  arc(0,0,size*0.8,size*0.8,0, map(hour() % 12,0,12,0,360));
  stroke(133,179,91);
  arc(0,0,size*0.5,size*0.5,0, map(month(),1,12,0,360));
  stroke(189,219,34);
  arc(0,0,size*0.45,size*0.45,0, map(day(),1,31,0,360));
  pop();
}

function ClockLine(p_x,p_y,size,strokesize){
  push();
  angleMode(DEGREES);
  strokeWeight(strokesize);
  translate(p_x,p_y);
  rotate(-90);
  stroke(2,166,118);
  rotate(map(second(),0,60,0,360));
  line(0, 0, size, 0);
  pop();

  push();
  strokeWeight(strokesize);
  translate(p_x,p_y);
  rotate(-90);
  stroke(0,140,14);
  rotate(map(minute(),0,60,0,360));
  line(0, 0, size * 0.65, 0);
  pop();

  push();
  strokeWeight(strokesize);
  translate(p_x,p_y);
  rotate(-90);
  stroke(0,115,105);
  rotate(map(hour() % 12,0,12,0,360));
  line(0, 0, size * 0.35, 0);
  stroke(255,255,255);
  point(0,0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
