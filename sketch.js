
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var elephant, elephantImg
var backgroundImg
var fh, fhImg

function preload(){
	
elephantImg = loadAnimation("sprites/0.png","sprites/1.png","sprites/2.png","sprites/3.png","sprites/4.png","sprites/5.png")
fhImg = loadImage("sprites/FH.png")
backgroundImg = loadImage("sprites/BG.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	fh = createSprite(100,300,50,50);
	fh.scale = 0.125
	elephant = createSprite(200,300,50,50)
	
	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  fh.addImage("fhImg",fhImg)
  elephant.addAnimation("elephant",elephantImg)
  drawSprites();
 
}



