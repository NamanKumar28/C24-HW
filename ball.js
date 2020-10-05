class Ball{
constructor(x,y,radius1){
 var options ={
     restitution:0.45,
     density: 1.2,
    friction: 0.5
 }
 this.body = Bodies.circle(x,y,radius1,options)
 this.radius = radius1
 World.add(world,this.body)
}
 display(){
     ellipseMode (CENTER)
     ellipse(this.body.position.x, this.body.position.y, this.radius*2, this.radius*2)
 }
}