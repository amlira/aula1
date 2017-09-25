var x = 100;
var y = 100;
var posX, posY;

function setup() {
	createCanvas(512, 512);
	posX = 0;
	posY = 200;
}

function draw() {
	background(0);
	if (keyIsDown(LEFT_ARROW))
	x-=5;

	if (keyIsDown(RIGHT_ARROW))
	x+=5;

	if (keyIsDown(UP_ARROW))
	y-=5;

	if (keyIsDown(DOWN_ARROW))
	y+=5;

	ellipse(x, y, 50, 50);
  
	if (posX < 640){
	posX = posX + 15;
	}else{
	posX = 0;
	}
	rect(posX, posY, 50, 50);
}



