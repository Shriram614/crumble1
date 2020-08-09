
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject,chain;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,550,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);
	//Create a Ground
	chain = new SlingShot(paperObject.body,{x:200, y:100});
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  chain.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}




