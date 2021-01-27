class Polygon{
    constructor(x,y,r){
        var option = {
            isStatic : false,
            friction : 1,
            density : 1.2,
            restitution : 0
        }

    this.polygon = Bodies.circle(x,y,r,option)
    this.r = r
    this.image = loadImage("polygon.png")
    World.add(world, this.polygon)
    }

    display(){
        var pos = this.polygon.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}