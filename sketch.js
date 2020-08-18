const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload() {
   
}

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

//create the bodies below 
ground = new Ground(240,790,480,15);

for(var k = 0; k<=width;k = k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}


for(var j = 40; j<=width;j = j+50){
  plinkos.push(new Plinko(j,75,30,30));
  }

  
for(var j = 15; j<=width-10;j = j+50){
  plinkos.push(new Plinko(j,175,30,30));
  }

  for(var j = 40; j<=width;j = j+50){
    plinkos.push(new Plinko(j,275,30,30));
    }
  
    
  for(var j = 15; j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,375,30,30));
    }




Engine.run(engine);
}

function draw(){
    background(0);
    rectMode(CENTER);
    ground.display();



for(var j = 0;j<particles.length;j++){
  particles[j].display();
  }


  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
    }

    for(var v = 0;v<plinkos.length;v++){
      plinkos[v].display();
      }



    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }













}