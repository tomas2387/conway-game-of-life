"use strict";
/*global describe,it*/

describe("getNeighbors", function() {
    it("array[1] return []", function() {
        var actual = getNeighbors([[1]],0,0);
        expect(JSON.stringify(actual)).toBe(JSON.stringify([0,0,0,0,0,0,0,0]));
    });
    it("array[1,1,0] position is 0,1 return [0,0,0,0,1,0,0,0]", function() {
        var actual = getNeighbors([[1,1,0]],0,0);
        expect(JSON.stringify(actual)).toBe(JSON.stringify([0,0,0,0,1,0,0,0]));
    });
    it("normal array return correct result", function() {
        var actual = getNeighbors([
            [0,1,0,1],
            [0,1,0,1],
            [0,1,0,1],
            [0,1,0,1],
        ],1,1);
        expect(JSON.stringify(actual)).toBe(JSON.stringify([0,1,0,0,0,0,1,0]));
    });
});

describe("getNumNeighbors", function() {
    it("if array[1] - 0 neighbours", function() {
        var actual = getNumNeighbors([[0]], 0, 0);
        expect(actual).toBe(0);
    });
    it("if array[2] - 1 neighbours", function() {
        var actual = getNumNeighbors([[0,1]], 0, 0);
        expect(actual).toBe(1);
    });

    it("normal array return correct", function() {
        var actual = getNumNeighbors(
            [
                [0,1,0,1],
                [0,1,0,1],
                [0,1,0,1],
                [0,1,0,1],
            ], 1, 1);
        expect(actual).toBe(2);
    });
    it("normal array border position return correct", function() {
        var actual = getNumNeighbors(
            [
                [0,1,0,1],
                [0,1,0,1],
                [0,1,0,1],
                [0,1,0,1],
            ], 3, 3);
        expect(actual).toBe(1);
    });
    it("normal array border position return correct", function() {
        var actual = getNumNeighbors(
            [
                [0,1,0,1],
                [0,1,0,1],
                [0,1,0,1],
                [0,1,0,1],
            ], 0, 3);
        expect(actual).toBe(1);
    });
});


describe("process", function() {
    it("process works", function() {
        var array = [
            [0, 1, 0 ],
            [0, 1, 0 ],
            [0, 1, 0 ]
        ];

        var actual = processRecursiu(array, array.length-1, array[0].length-1);
        var expected = [
            [0, 0, 0 ],
            [1, 1, 1 ],
            [0, 0, 0 ]
        ];
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
});
