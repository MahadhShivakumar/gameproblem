var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var block1,block2,shield1,shield2;
var edges;
var bullet,bulletGroup;
var back_img, gun_img1, gun_img2, bullet_img1, bullet_img2, shield_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/background.png");
  gun_img1 = loadImage("images/revolver.png");
  gun_img2 = loadImage("images/revolver2.png");
  bullet_img1 = loadImage("images/bullet.png");
  bullet_img2 = loadImage("images/bullet2.png");
  shield_img = loadImage("images/shield.png")
  bulletGroup = new Group();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}