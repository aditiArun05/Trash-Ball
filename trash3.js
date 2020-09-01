class Trash3{
    constructor(x,y,width,height){
var options={
    isStatic:true,
    density:1
}

this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
}
display(){
    rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,110,10)

}
}
