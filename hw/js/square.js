
//this class is a file that hold blue print of one single circle
class Square {
    //stores all the info, in order to be used later below
    constructor(x, y, s) {
        this.x= x;
        this.y = y;
        this.s = s;
        this.isRising = true;
        this.color = null;
        this.colorFrom = color(183, 221, 235);
        this.colorTo = color(65, 145, 64);
        this.lerpAmount = 0;
        
       

    }

    draw() {
        fill(this.color)
        square(this.x, this.y, this.s);
        
        
    
    }
    update() {
        
        //if you pass initial value, min, max, outputMin, outputMax it will give corresponding #
        this.lerpAmount = map(this.s, minS, maxS, 0,1);

        this.color = lerpColor (this.colorFrom, this.colorTo, this.lerpAmount);

         //move the square
         if (this.isRising) {
            this.y -= 2;
            } else {
             this.y *= 1.05;
        }

        //isGrowing 
        if (this.isGrowing) {
            this.s += 3; 
        } else{
            this.s -= 1; 
        }
        // max boundary
        if (this.s > maxS){
            this.isGrowing = false;
        }  
        //min boundary      
        if (this.S < minS){
            this.isGrowing = true;
        }





    }
}