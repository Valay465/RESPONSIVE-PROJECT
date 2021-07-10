var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var last_x,last_Y;
var color="brown";
var Width_of_line=2;

var screenWidth=screen.width;

var screenheight=screen.height;

var newWidth=screenWidth-70;

var newheight=screenheight-300;


if(screenWidth<992) {
document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",S_touchstart);

function S_touchstart(e) {
console.log("touchstart");
color = document.getElementById("color").value;
Width_of_line = document.getElementById("Width_of_line").value;
last_x=e.touches[0].clientX-canvas.offsetLeft;
last_Y=e.touches[0].clientY-canvas.offsetTop;

}



        canvas.addEventListener("touchmove",M_touchmove); 

        function M_touchmove(e) {
console.log("touchmove");

            var current_X=e.touches[0].clientX-canvas.offsetLeft;
            var current_Y=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = Width_of_line;

console.log("last position of x and Y");

console.log("x="+last_x+"y="+last_Y);

ctx.moveTo(last_x,last_Y);

console.log("current position of x and Y");

console.log("x="+current_X+"y="+current_Y);

ctx.lineTo(current_X,current_Y);

ctx.stroke();



 last_x=current_X;
last_Y=current_Y;           

}
function all_clear() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    