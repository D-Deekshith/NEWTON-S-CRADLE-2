class Roof{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{isStatic: true})
        this.radius = radius;

        World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        circle(this.body.position.x,this.body.position.y,this.radius)
    }
}