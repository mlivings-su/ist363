const saveImageBtn = document.getElementById("saveImageBtn")

//"event name", callback function
saveImageBtn.addEventListener("click", function() {
    saveCanvas("myCanvas", "png");
});

const canvas = {
    width : 800,
    height : 800
}
const totalCircles = 100;
const circles =[]
const minDiameter = 10;
const maxDiameter = 100;

//square
const totalSquares = 20;
const squares = [];
const minS = 10;
const maxS = 100;



//interactivity

function mouseDragged() {
    
    const circleDiameter = random(minDiameter, maxDiameter);
    const newCircle = new Circle(mouseX, mouseY, circleDiameter);

    circles.push(newCircle);


    if (circles.length > totalCircles) {
        circles.shift(); 
    }
}




function setup(){
createCanvas(canvas.width, canvas.height);
background(0);


//needs a counter, condition, increment
for (let i = 0; i < totalCircles; i++) {
    const circleSettings = {
        x:random (0, canvas.width),
        y:random (0, canvas.height),
        diameter:random (minDiameter, maxDiameter)
    }
    const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);
    circles.push(myCircle);
    
    }

}
//square

for (let i = 0; i < totalSquares; i++) {
    const squareSettings = {
        x:random (0, canvas.width),
        y:random (0, canvas.height),
        s:random (minS, maxS)
    }
    const mySquare = new Square (squareSettings.x, squareSettings.y, squareSettings.s);
    squares.push(mySquare);
    
    }


function draw(){
 //noLoop();
 //noStroke();
 background(255);
 stroke(3);

 for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].draw();


 }

for (let i = 0; i < squares.length; i++) {
    squares[i].update();
    squares[i].draw();


 }
}

