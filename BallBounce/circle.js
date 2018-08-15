function Circle(x, y, r, g, c, Comp){
    var options = {
      collisionFilter: {
      group: g,
      collidesWith: c
      },
      slop:.3,
      restitution:.6
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r
    this.Comp = Comp
    World.add(world, this.body);
    if (Comp){
      composite.add(Comp,this.body);
    }
    this.show = function() {
      var pos = this.body.position
      push()
      translate(pos.x,pos.y);
      ellipse(0,0,this.r,this.r);
      pop()
  }




}
