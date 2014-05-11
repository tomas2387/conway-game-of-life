
function getNeighbors(array, x, y) {
    return [
        array[x-1] && array[x-1][y-1] || 0, array[x-1] && array[x-1][y]  || 0,  array[x-1] && array[x-1][y+1] || 0,
        array[x]   && array[x][y-1]   || 0,                                     array[x]   && array[x][y+1]   || 0,
        array[x+1] && array[x+1][y-1] || 0, array[x+1] && array[x+1][y]  || 0,  array[x+1] && array[x+1][y+1] || 0
    ];
}

function getNumNeighbors(array, x, y) {
    var neighbors = getNeighbors(array, x, y);
    //return neighbors.reduce(function(previous, currentValue) {
    //    return previous + currentValue;
    //}, 0);
    var total = 0;
    for(var i = 0; i < 8; ++i)
        total = total + neighbors[i];

    return total;
}

function getNewState(state, neighbors) {
    if(neighbors > 3 || neighbors < 2) {
        return 0;
    }
    else if(neighbors === 3) {
        return 1;
    }

    return state;
}

function processRecursiu(array, fila, columna) {
    var nextArray = [];
    if(fila == 0 && columna == 0 || fila < 0) {
        nextArray[0] = [];
        nextArray[0][0] = getNewState(array[0][0], getNumNeighbors(array, 0, 0));
        return nextArray;
    }

    if(columna == 0) {
        nextArray = processRecursiu(array, fila-1, array.length-1);
        nextArray[fila] = [];
        nextArray[fila][columna] = getNewState(array[fila][columna], getNumNeighbors(array, fila, columna));
    } else {
        nextArray = processRecursiu(array, fila, columna-1);
        nextArray[fila][columna] = getNewState(array[fila][columna], getNumNeighbors(array, fila, columna));
    }
    return nextArray;
}
