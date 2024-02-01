
//this class is a file that hold blue print of one single circle
class Circle {
    //stores all the info, in order to be used later below
    constructor(x, y, diameter) {
        this.x= x;
        this.y = y;
        this.diameter = diameter;
        this.isRising = true;
        this.color = null;
        this.colorFrom = color(0,14, 84);
        this.colorTo = color(247, 105, 0);
        this.lerpAmount = 0;

    }

    draw() {
        fill(this.color)
        circle(this.x, this.y, this.diameter);
    
    }
    update() {
        //if you pass initial value, min, max, outputMin, outputMax it will give corresponding #
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0,1);

        this.color = lerpColor (this.colorFrom, this.colorTo, this.lerpAmount);

         //move the circle
         if (this.isRising) {
            this.y -= 2;
            } else {
             this.y *= 1.05;
        }

        //isGrowing 
        if (this.isGrowing) {
            this.diameter += 1; 
        } else{
            this.diameter -= 1; 
        }
        // max boundary
        if (this.diameter > maxDiameter){
            this.isGrowing = false;
        }  
        //min boundary      
        if (this.diameter < minDiameter){
            this.isGrowing = true;
        }





        //top boundary
        if(this.y <= (this.diameter / 2)) {
        this.isRising = false;
        }
            //bottem boundary
        if(this.y >= canvas.height - this.diameter / 2) {
            this.isRising = true;
        }
        }
      

    }