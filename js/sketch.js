function make2DArray (cols, rows){
  var arr = new Array(cols);
  for (var i = 0; i<arr.length; i++){
    arr[i] = new Array (rows);
  }
  return arr;
}

var firstSetup = true;
var gameover = false;
var won = false;
var canvasWidth = 401;
var canvasHeight = 401;
var grid;
var cols;
var rows;
var w = 40;
var totalMines = 5;
var number = [];

var images = {
  mine: undefined,
  flag: undefined,
  cell: undefined,
  bomb: undefined,
  empty: undefined,
  wrong: undefined,
}

function preload(){
  //assets
  image.mine = loadImage("../img/minefield_mine.png");
  image.flag = loadImage("../img/minefield_flag.png");
  image.cell = loadImage("../img/minefield_space.png");
  image.empty = loadImage("../img/minefield_empty.png")
  image.wrong = loadImage("../img/minefield_mine_wrong.png")
  image.bomb = loadImage("../img/minefield_mine_death.png")
  for (var i = 0; i < 8; i++){
    number[i] = loadImage(`../img/minefield_${i+1}.png`);
  }
}

function setup(){
  createCanvas(canvasWidth, canvasHeight);
  cols = Math.floor(canvasWidth / w)
  rows = Math.floor(canvasHeight / w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < cols; j++){
      grid[i][j] = new Cell(i, j, w);
    }
  }
  //pick total Mines spots
  var options = [];

  for (var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      options.push([i, j])
    }
  }
  for (var n = 0; n< totalMines; n++){
    var index = floor(random(options.length));
    var choice = options[index]
    var i = choice[0];
    var j = choice[1];
    //deletes that spot so it is no longer an option
    options.splice(index, 1);
    grid[i][j].mine = true;
  }


  for (var i = 0; i < cols; i++){
    for (var j = 0; j < cols; j++){
        grid[i][j].countMines();
    }
  }
}

function lose(){
  console.log("GAME OVER")
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < cols; j++){
      grid[i][j].revealed = true;
    }
  }

}


function mousePressed() {
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < cols; j++){
      if(grid[i][j].contains(mouseX, mouseY)){
        grid[i][j].reveal();

        if(grid[i][j].mine){
          lose();
          
        }
      }
    }
  }
}

function draw(){
  background(255);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < cols; j++){
      grid[i][j].show();
    }
  }
}
