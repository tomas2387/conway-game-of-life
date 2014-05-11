var Grid = function(width, height, cellSize) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;

    this.canvas = document.createElement('CANVAS');
    this.canvas.style.border = "1px solid black";
    this.canvas.width = width * cellSize;
    this.canvas.height = height * cellSize;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
};

Grid.prototype = {
    setPoint: function(x, y) {
        var number1 = (Math.floor(Math.random()*9));
        var number2 = (Math.floor(Math.random()*9));
        var number3 = (Math.floor(Math.random()*9));

        this.ctx.fillStyle = "#"+number1+""+number2+""+number3;
        this.ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
    },

    unsetPoint: function(x, y) {
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
    }
};
