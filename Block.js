class Block{
    constructor(x,y,width,height) {
        var option = {
            restitution : 0,
            friction : 0,
            isStatic : false 
        }

        this.block = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("2021-01-23.png")
        this.w = width;
        this.h = height;
        this.visibility = 255
        World.add(world,this.block);
      }
      display(){
        var pos = this.block.position;
        
        if(this.block.speed>6){
            World.remove(world, this.block)
            this.visibility-=5
            push()
            tint(255,this.visibility)
            image(this.image,pos.x,pos.y,this.w,this.h)
            pop()
        } else{
            imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);      

        }
    }

    score(){
        if(this.visibility<0 && this.visibility >-105){
            score = score+10
        }
    }
}