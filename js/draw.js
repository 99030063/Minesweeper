var canvas = document.getElementById('canvas2d');

canvas.width = 200;
canvas.height = 200;

var c = canvas.getContext("2d") //c is context

c.fillStyle = "black";
c.rect(0, 0, canvas.width, canvas. height);
var grid;
var cols;
var rows;
var w = 16;


function setup(){
    cols = Math.floor(canvas.width / w)
    rows = Math.floor(canvas.height / w);

    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++){
        for (var j = 0; j < cols; j++){
            grid[i][j] = new Cell(i*w, j*w);
        }
    }
}

function draw(){
    for (var i = 0; i < cols; i++){
        for (var j = 0; j < cols; j++){
            grid[i][j].show();
        }
    }
}

setup();