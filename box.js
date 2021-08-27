class box{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':0.5
        }
        this.image = loadImage("images/brick.png");
        this.body = Bodies.rectangle(x, y, 50, 18, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        if(this.body.speed < 9){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0, 0, this.width, this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
        }

        score2(){
          if (this.Visiblity < 0 && this.Visiblity > -1005){
            score2++;
          }
        }

    
}