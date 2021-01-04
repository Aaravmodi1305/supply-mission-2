class Box {
    constructor(x , y , width , height){
        var body_1 = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,body_1);
        this.width = width;
        this.height = height;
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position;
        push();
            translate(pos.x , pos.y);
            rotate(this.body.angle);
            fill("blue");
            rectMode(CENTER);
            rect(0 , 0, this.width , this.height);
        pop()
    }
}