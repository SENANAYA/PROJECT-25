const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballno=0
var ball=[],ground,leftSide,rightSide,groundl,groundr,groundu;

var world;
var rand;
var ballcount=4
var radius = 70;
var timegap=150
var time=50
function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

	
}


function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	ball[0]= new ballmedium(width/6,200)
	ball[1]= new ballbig(2*width/6,200)
	ball[2]= new ballsmall(4*width/6,200)
	ball[3]= new ballhuge(5*width/6,200)
	ground=new Ground(width/2,height,width,20);
	groundu=new Ground(width/2,0,width,20);
	groundl=new Ground(0,height/2,20,height);
	groundr=new Ground(width,height/2,20,height);
	leftSide = new Ground(width/2-75,height-90,30,160);
	rightSide = new Ground(width/2+75,height-90,30,160);
	bottomSide = new Ground(width/2,height-10,150,20);

	Engine.run(engine);
 
}


function draw() {
	if(time>0){
		time=time-1
	}
	if(time===0){
		rand=Math.round(random(0,3))
		switch (rand) {
			case 0:
				
				ball[ballcount]= new ballmedium(width/6,200)
				
				break;
		
			case 1:
				ball[ballcount]=  new ballbig(2*width/6,200)
				
				break;
				
		
			case 2:
				ball[ballcount]= new ballsmall(4*width/6,200)
				
				break;
				case 3:
					ball[ballcount]= new ballhuge(5*width/6,200)
				break;
		}
		time=timegap
ballcount=ballcount+1
	}
	background(200);
	rectMode(CENTER);
	textSize(40)
text("use arrow keys to move the trash",200,200)
for(balls of ball){
	
	balls.display()
}
	
	ground.display();
	groundr.display();
	groundl.display();
	groundu.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);
if(ball[ballno].trashed===true){
	ballno=ballno+1
}
	ball[ballno].body.move=true

	
	
	image(dustbinImg, width/2, height-97, 200,200);
	
	// if(ball){

	// }


}

// function keyPressed() {
//   	if (keyCode === UP_ARROW) {

// 		if(ball.move===true){
// 		Matter.Body.applyForce(ball,ball.position,{x:0,y:-35});
// 		}
// 		if(ball2.move===true){
// 			Matter.Body.applyForce(ball2,ball2.position,{x:0,y:-35});
// 			}
    
//   	}
// 	  if (keyCode === RIGHT_ARROW) {

// 		Matter.Body.applyForce(ball,ball.position,{x:35,y:0});
    
//   	}
// 	  if (keyCode === LEFT_ARROW) {

// 		Matter.Body.applyForce(ball,ball.position,{x:-35,y:0});
    
//   	}
	
// }
