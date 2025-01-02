class bubble {
    constructor(_x,_y,_r) {
        this.x=_x
        this.y=_y
        this.r=_r
        this.xoff=random(0.001,100)
        this.yoff=random(0.001,100)
        this.colz=random(50,255)
        this.colx=random(100,255)
        this.coly=random(150,255)
    }
    behave()
    {
        if (this.x>0 && this.x<width && this.y>0 && this.y<height) {     
            noStroke()
            fill(this.colx,this.coly,this.colz,200)
            ellipse(this.x, this.y, this.r)
            this.tx=map(noise(this.xoff), 0, 1, -4, 5)
            this.ty=map(noise(this.yoff), 0, 1, -5, 5)
            this.xoff+=random(0.001, 0.1)
            this.yoff+=random(0.001, 0.1)
            this.x+=this.tx
            this.y+=this.ty
        }
    }
}