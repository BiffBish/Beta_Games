  function Box(x, y, w, h, g, c, Comp){
      var options = {
        collisionFilter: {
        group: g,
        collidesWith: c
        },
        slop:.3,
        restitution:.6
      }
      this.body = Bodies.rectangle(x, y, w, h,options);
      this.w = w
      this.h = h;
      World.add(world, this.body);
      if (Comp){
        composite.add(Comp,this.body);
      }
      this.show = function() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.w,this.h)

        pop()




    }




  }
