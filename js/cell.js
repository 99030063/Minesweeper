function Cell(i, j, w){
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighborCount = 0

    this.bee = false;
    this.revealed = false;
}

Cell.prototype.show = function(){    
  stroke(0);
  noFill();
  image(image.cell, this.x, this.y, this.w, this.w);
  if(this.revealed){
    if (this.mine){
      noFill();
      image(image.mine, this.x, this.y, this.w, this.w);
    }else{
      stroke(0)
      noFill();
      image(image.empty, this.x, this.y, this.w, this.w);
      if(this.neighborCount > 0){
        textAlign(CENTER);
        fill(0);
        image(number[this.neighborCount-1], this.x, this.y, this.w, this.w);
      }
    }
  }
}

Cell.prototype.countMines = function(){
  if (this.mine){
    this.neighborCount = -1;
    return
  }
  var total = 0;
  for (var xoff = -1; xoff <= +1; xoff++){
    for (var yoff = -1; yoff <= +1; yoff++){
      var i = this.i + xoff;
      var j = this.j + yoff;
      if(i > -1 && i< cols && j > -1 && j<rows){
        var neighbor = grid[i][j];
        if (neighbor.mine){
          total++
        }
      }
    }
  }
  this.neighborCount = total;
}

Cell.prototype.contains = function (x, y){
  return (x > this.x && x< this.x + this.w && y > this.y && y < this.y+this.w);
}

Cell.prototype.reveal = function (){
  this.revealed = true;
  if(this.neighborCount == 0){
    //flood fill
    this.floodFill();
  }
}

Cell.prototype.floodFill = function(){
  for (var xoff = -1; xoff <= +1; xoff++){
    for (var yoff = -1; yoff <= +1; yoff++){
      var i = this.i + xoff;
      var j = this.j + yoff;
      if(i > -1 && i< cols && j > -1 && j<rows){
        var neighbor = grid[i][j];
        if (!neighbor.mine && !neighbor.revealed){
          neighbor.reveal();
        }
      }
    }
  }  
}

// Cell.prototype.death = function(){
//   if(this.contains(mouseX, mouseY)){
//     noFill();
//     image(image.bomb, this.x, this.y, this.w, this.w);
//   }
// }