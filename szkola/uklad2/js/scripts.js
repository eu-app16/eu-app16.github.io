function test(){
  var height = window.innerHeight-(window.innerHeight%60);
  var width = window.innerWidth-(window.innerWidth%60);
  
  var x0 = width/2; 
  var y0 = height/2; 
  
  var c=document.getElementById("myCanvas");
  c.width = width;
  c.height = height;
  var ctx=c.getContext("2d");
  var lengthOfUnit = 60;
  var numberOfUnitsOnXAxis = x0/lengthOfUnit;
  var numberOfUnitsOnYAxis = y0/lengthOfUnit;

  // the beginning of the coords
  ctx.translate(x0+0.5,y0+0.5);
  ctx.fillRect(0,0,100,50);

  ctx.beginPath();
  for (i=-numberOfUnitsOnXAxis; i < numberOfUnitsOnXAxis; i++) {
    ctx.moveTo(i*lengthOfUnit,-y0);
    ctx.lineTo(i*lengthOfUnit,y0);
    ctx.stroke();
  }
  ctx.closePath();

  ctx.beginPath();
  for (i=-numberOfUnitsOnYAxis; i < numberOfUnitsOnYAxis; i++){
    ctx.moveTo(-x0, i*lengthOfUnit);
    ctx.lineTo(x0, i*lengthOfUnit);
    ctx.stroke();
  }
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(-1.5, -y0);
  ctx.lineTo(-1.5, y0);
  ctx.stroke();
  ctx.closePath();
}
