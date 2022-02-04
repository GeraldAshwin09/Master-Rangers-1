
var canvas = new fabric.Canvas('mycanvas');
var blockX=25;
var blockY=25;
var blockwidth=250;
var blockheight=250;
var block_object;

function new_image(getimg)
{
    fabric.Image.fromURL(getimg, function(Img){
block_object=Img;
block_object.scaleToWidth(blockwidth);
block_object.scaleToHeight(blockheight);
block_object.set({
    top:blockX,
    left:blockY
});
canvas.add(block_object);
    });

}


window.addEventListener("keydown",mk);
function mk(e)
{
    keyPressed=e.keyCode;

    if(keyPressed == "82")
{
    new_image("rr1.png")
    blockX=200
    blockY=300
console.log("red")
}

if(keyPressed == "71")
{
    new_image("g2-removebg-preview.png")
    blockX=350
    blockY=100
console.log("green")
}

if(keyPressed == "89")
{
    new_image("y6-removebg-preview.png")
    blockX=100
    blockY=100
console.log("yellow")
}

if(keyPressed == "80")
{
    new_image("p3-removebg-preview.png")
    blockX=100
    blockY=500
console.log("pink")
}

if(keyPressed == "66")
{
    new_image("b9-removebg-preview.png")
    blockX=350
    blockY=600
console.log("blue")
}
}

