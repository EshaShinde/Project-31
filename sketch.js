const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var world
var ground1

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
 

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
    world = engine.world;

    for(var j = 15; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,200));
    }
    
    for(var j = 40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,300));
    }
    
    for(var j = 15; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,400));
    }
    
    //Making the divisions
    for(var i = 0; i <= width; i = i + 80){
      divisions.push (new Division(i, height - divisionHeight/2, 10, divisionHeight));
    }
    ground1 = new Ground(440,800, 1200, 50) 
  }





  

function draw() {
  background(0,0,0);
  
  Engine.update(engine);
  ground1.display();

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
   }

  //showing the divisions
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  //showing the particles
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

  
  if (frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2 + 10),10,10));
  } 
} 

