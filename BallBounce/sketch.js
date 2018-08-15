
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    composite = Matter.Composite,
    engine,
    boxes = [],
    world,
    WorldParts = composite.create()

Matter.Detector.canCollide = function (filterA, filterB) {
  //".group" specifiies which group the collection belongs to
  //this logic just makes sure that group A can't collide with group B
  //the same if you just return true
    return (filterB.collidesWith.includes(filterA.group) || filterB.group == 0) && (filterA.collidesWith.includes(filterB.group) || filterA.group == 0);
}

function setup() {
  createCanvas(400,400)
  var engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  ground = Bodies.rectangle(width/2, 400, width, 100,
    {
      isStatic: true,

      collisionFilter: {
        group: 0,
        collidesWith: [0, 1]
      }
    }
  );
  World.add(world, ground);
}

function mousePressed(){
  Balls.push(new Circle(mouseX,mouseY,20,1,[0]))

}

function draw() {
  background(51);
  for( var i = 0; i < boxes.length; i++)
  {
    Balls[i].show()
  }
}
