(function(Grid) {
    var ROWS = 95,
        COLUMNS = 95,
        SKIP_FRAMES = 5;

    var grid = new Grid(ROWS, COLUMNS, 4);
    var array = [];
    for(var i = 0; i < ROWS; ++i) {
        array[i] = [];
        for(var j = 0; j < COLUMNS; ++j) {
            var number = Math.floor(Math.random() * 10);
            if(number === 1)
                array[i][j] = 1;
        }
    }

    function renderArray(array) {
        for(var i = 0; i < ROWS; ++i) {
            for(var j = 0; j < COLUMNS; ++j) {
                if(array[i][j]) {
                    grid.setPoint(i, j);
                }
                else {
                    grid.unsetPoint(i, j);
                }
            }
        }
    }

    var counter = 0;
    function repeatOften() {
        counter++;
        if(counter > SKIP_FRAMES) {
            renderArray(array);
            array = processRecursiu(array, array.length-1, array[0].length-1);
            counter = 0;
        }
        requestAnimationFrame(repeatOften, document.getElementsByTagName('canvas')[0]);
    }
    repeatOften();
})(Grid || {});
