class Box {
    constructor(x,y,width,height)
    {
        var options = 
        {
            
         'restitution':0.5,
        'friction':0.3,
        'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        
        strokeWeight(4);
        stroke("green");
        fill("white")
        rect(0,0,this.width,this.height);
        pop()
       // rect(pos.x,pos.y,this.width,this.height);
    }

}