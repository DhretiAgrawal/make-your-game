class Ball{
    constructor(x,y){
        var options = {
         restitution:0.8,
         density:0.3,
         friction:0.6
         //isStatic:true
        }
        this.body= Bodies.circle(x, y, 60, options);
        World.add(world, this.body);
        this.radius=70;
        //this.image =loadImage("images/pin1.png");

    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
      
    }
}