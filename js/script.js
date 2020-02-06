let cvsElem = document.getElementById("cvs");

cvsElem.style.border = '2px solid black';

let ctx = cvsElem.getContext("2d");
cvsElem.width=500;
cvsElem.height=500;

let rect = {};
rect.x = 0;
rect.y = 0;


function draw()
{
    move();

    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(rect.x, rect.y, 50, 50);
}

let speed=3;
let code="KeyD";

function move()
{
    if(code === "KeyW")
    {
    	console.log("Up");
    	if(rect.y<speed)
    	{
    		rect.y=0;
    	}
    	else rect.y-=speed;
    }
    else if(code === "KeyA")
    {
    	console.log("Left");
    	if(rect.x<speed)
    	{
    	    rect.x=0;
 
    	}
    	else rect.x-=speed;
    }
    else if(code === "KeyD")
    {
    	console.log("Right");
    	if(rect.x+50+speed>500)
    	{
    	    rect.x=450;
    	}
    	else rect.x+=speed;
    }
    else if(code === "KeyS")
    {
    	console.log("Down");
    	if(rect.y+50+speed>500)
    	{
    	    rect.y=450;
    	}
    	else rect.y+=speed;
    }
}

function moveHandler(event)
{
    code = event.code;
}

setInterval(draw, 10);
document.addEventListener("keypress", (event) => moveHandler(event));