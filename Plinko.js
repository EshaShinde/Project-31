class Plinko{
constructor(x,y,r)
{
    var options ={
        isStatic:true,
        restitution :0,
        friction: 1
    }
    

    this.body = Bodies.circle(this.x, this.y, this.r)
    this.x = x
    this.y = y
    this.r = 10
    World.add(world, this.body)

}
}