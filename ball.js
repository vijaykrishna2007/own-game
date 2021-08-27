class ball{
    constructor(x, y,angle) {
        this.image = loadImage("images/ball.png");
        var options = {
            'restitution':0.8,
            'friction':0.8,
            'density':0.8
        }
        this.body = Bodies.circle(x, y, 30, options);
        //this.width = 50;
        //this.height = 50;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, 60, 60);
        pop();
      }
}