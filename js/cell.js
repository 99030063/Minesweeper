function make2DArray (cols, rows){
    var arr = new Array(cols);
    for (var i = 0; i<arr.length; i++){
        arr[i] = new Array (rows);
    }
    return arr;
}

function Cell(x, y, w){
    this.x = x;
    this.y = y;
    this.w = w;
    this.mine = true;
    this.revealed = true;
}

Cell.prototype.show = function(){
    
    c.rect(this.x, this.y, this.w, this.w);
}