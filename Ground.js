class Ground{
    constructor(){
        var option = {
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,option)
          World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position
        
        fill("grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,900,20);
    }
}