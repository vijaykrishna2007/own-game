class rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 180
        }
        this.crane = loadImage('images/crane.png');
        this.bodyB = bodyB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        image(this.crane,crane.body.position.x - 190, crane.body.position.y - 10);
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var bodyB = this.rope.bodyB.position;
            push();
            strokeWeight(5);
            line(bodyB.x,bodyB.y,pointA.x,pointA.y);          
            pop();
        }
    }
    
}