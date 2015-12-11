//	main.js
var canvas=document.getElementById('mycanvas');
var context=canvas.getContext('2d');

var radius=10;
var eDraw=false;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight-5;

context.lineWidth=radius*2;

var mDown=function(e){
	eDraw=true;
	mMove(e);
}

var mUp=function(e){
	eDraw=false;
	context.beginPath();
}

var mMove=function(e){
	if(eDraw==true){
		context.lineTo(e.clientX,e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX,e.clientY);
		//context.closePath();
	}
}

function clearScr(){
	context.clearRect(0,0,canvas.width,canvas.height);
}

function save()
{
  if (canvas.getContext) {
     var ctx = canvas.getContext("2d");
     var myImage = canvas.toDataURL("image/png");
  }
  document.location.href = myImage;  
}

canvas.addEventListener('mousedown',mDown);
canvas.addEventListener('mouseup',mUp);
canvas.addEventListener('mousemove',mMove);