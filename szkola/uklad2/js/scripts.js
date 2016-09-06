var lengthOfUnit = 50;
var height = window.innerHeight-(window.innerHeight%lengthOfUnit);
var width = window.innerWidth-20-(window.innerWidth%lengthOfUnit);
  
var x0 = width/2; 
var y0 = height/2;  

var c=document.getElementById("myCanvas");
c.width = width;
c.height = height;
var ctx=c.getContext("2d");

var numberOfUnitsOnXAxis = x0/lengthOfUnit;
var numberOfUnitsOnYAxis = y0/lengthOfUnit;
ctx.translate(x0+0.5,y0+0.5);

function test(){
  ctx.strokeStyle = "#b3b3b3";
  ctx.beginPath();
  ctx.font = "15px Arial";
  for (i=0; i < numberOfUnitsOnXAxis; i++) {
    ctx.fillText(i, i*lengthOfUnit+5, 15); 
    ctx.fillText(-i, -i*lengthOfUnit+5, 15); 
    ctx.moveTo(i*lengthOfUnit,-y0);
    ctx.lineTo(i*lengthOfUnit,y0);
    ctx.moveTo(-i*lengthOfUnit, -y0);
    ctx.lineTo(-i*lengthOfUnit, y0);
    ctx.stroke();
  }
  ctx.closePath();
  ctx.beginPath();
  for (i=0; i < numberOfUnitsOnYAxis; i++){
    ctx.fillText(-i, 5, i*lengthOfUnit+15);
    ctx.fillText(i, 5, -i*lengthOfUnit+15);
    ctx.moveTo(-x0, i*lengthOfUnit);
    ctx.lineTo(x0, i*lengthOfUnit);
    ctx.moveTo(-x0, -i*lengthOfUnit);
    ctx.lineTo(x0, -i*lengthOfUnit);
    ctx.stroke();
  }
  ctx.closePath();
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(-0, -y0);
  ctx.lineTo(-20, -y0+25);
  ctx.moveTo(-0, -y0);
  ctx.lineTo(20, -y0+25);
  ctx.moveTo(0, -y0);
  ctx.lineTo(0, y0);
  ctx.moveTo(-x0, 0);
  ctx.lineTo(x0, 0);
  ctx.lineTo(x0-20, 20);
  ctx.moveTo(x0,0);
  ctx.lineTo(x0-20, -20);
  ctx.stroke();
  ctx.closePath();
}

function draw(equation){
  var x,y;
  var scope = { x: 0 }
  ctx.beginPath();
  for(i=-numberOfUnitsOnXAxis; i<numberOfUnitsOnXAxis; i+=0.02000003){
    x = i*50;
    //y = (-1/i)*50;
    scope.x = i;
    y = -math.eval(equation, scope)*50;
    ctx.lineTo(x, y);
    //ctx.fillRect(i*50, (-1/i)*50, 1, 1);
  }
  ctx.stroke();
  ctx.closePath();
}

/* Set the width of the side navigation to 250px */

