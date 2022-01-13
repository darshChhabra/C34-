//var box
var stu

function setup(){
    createCanvas(400, 400)
    //box = new Box(200, 200, 50, 50, 5)
    stu = new Student("bob", 88, 3)
    stu.display()
}

function draw(){
    background("purple")
    //box.display()
    //box.speed()
}
