//Create variables here

var Dog;
var happydog;
var database;
var foodS;
var foodStock;
 


function preload()
{
	//load images here
  dogImage = loadImage("Dog.png")
  happydogImage = loadImage("happydog.png")
}

function setup() {
	createCanvas(500,500);
  database = firebase.database()
  Dog = createSprite(250,300,150,150)
  Dog.addImage(dogImage)
  Dog.scale = 0.15
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,139,87)
  
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  Dog.addImage(happydogImage);
  }
  textSize(30);
  fill("green");
  stroke("blue")
  text("foodremaining = "+foodS,170,200);
  text("press upArrowkey to feed the milk",130,10,300,20);
}
function readStock(data){
foodS = data.val()
}
function writeStock(x){
  if(x<=0){ x=0; }else{ x=x-1; }
database.ref('/').update({
Food:x
})
}



