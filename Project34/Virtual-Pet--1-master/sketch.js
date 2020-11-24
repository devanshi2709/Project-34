//Create variables here

var dog, happyDog;
var database;
var food, foodStock,readStock;

var dogImg,happyDogImg;

function preload()
{
  //load images here
  
  dogImg= loadImage("images/dogImg.png");
  happyDogImg= loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog= createSprite(250,250,20,20);
  dog.addImage("dog",dogImg);
  dog.scale= 0.1
  

    database= firebase.database();

  foodStock= database.ref("food");
  //foodStock.on("value",readStock);

}


function draw() {  
    background(46,139,87);


  drawSprites();
  //add styles here

}



