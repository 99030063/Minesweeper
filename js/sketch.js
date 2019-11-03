

function make2DArray (cols, rows){
    var arr = new Array(cols);
    for (var i = 0; i<arr.length; i++){
        arr[i] = new Array (rows);
    }
    return arr;
}

let img;
var canvasWidth = 401;
var canvasHeight = 401;
var grid;
var cols;
var rows;
var w = 20;


function setup(){
    img = loadImage('img/minefield_1.png');
    img = loadImage('img/minefield_2.png');
    img = loadImage('img/minefield_3.png');
    img = loadImage('img/minefield_4.png');
    img = loadImage('img/minefield_5.png');
    img = loadImage('img/minefield_6.png');
    img = loadImage('img/minefield_7.png');
    img = loadImage('img/minefield_8.png');
    img = loadImage('img/minefield_empty.png');
    img = loadImage('img/minefield_flag.png');
    img = loadImage('img/minefield_maybe.png');
    img = loadImage('img/minefield_mine_death.png');
    img = loadImage('img/minefield_mine_wrong.png');
    img = loadImage('img/minefield_4.png');
    img = loadImage('img/minefield_4.png');
    cols = Math.floor(canvasWidth / w)
    rows = Math.floor(canvasHeight / w);
    createCanvas(canvasWidth, canvasHeight);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++){
        for (var j = 0; j < cols; j++){
            grid[i][j] = new Cell(i*w, j*w, w);
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
