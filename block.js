class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':3,
        'density':0.1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    console.log(this.body.speed);
    if(this.body.speed<6){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2)
    fill(0, 228, 208);
    rect(0, 0, this.width, this.height);
    pop();
  } else {
   World.remove(world, this.body)
  }
}

}
