class Box{
    constructor(x, y, w, h, vx){
        this.x = 200
        this.y = 200
        this.w = 50
        this.h = 50
        this.vx = 5
        
    }
    display(){
        rect(this.x, this.y, this.w, this.h)

    }
    speed(){
        this.x = this.x + 5
    }
}