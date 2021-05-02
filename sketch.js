//Create variables here
var dog, happyDog, database, foodS, foodStock, normalDog;

function preload()
{
	//load images here
  normalDog = loadImage ("images/dogImg.png")
  happyDog = loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(250,250,10,10)
  dog.addImage(normalDog)
  

  
}


function draw() {  

  drawSprites();
  //add styles here

}



