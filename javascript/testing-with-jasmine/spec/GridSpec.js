describe("Grid lines", function () {

    var grid

    beforeEach(function () {
        grid = new Grid({
            cellSize: 10,
            xAmount: 7,
            yAmount: 5
        })
    })

    it("can set cellSize and cellCount", function () {
        expect(grid.cellSize).toEqual(10)
        expect(grid.xAmount).toEqual(7)
        expect(grid.yAmount).toEqual(5)
    })

    it("can get the width and height of the grid", function () {
        expect(grid.getWidth()).toEqual(70)
        expect(grid.getHeight()).toEqual(50)
    })

    it("gives the start and end coords for all the vertical lines on the x-axis", function () {
        expect(grid.getLinesX()).toEqual([
            [[ 0, 0], [ 0, 70]],
            [[10, 0], [10, 70]],
            [[20, 0], [20, 70]],
            [[30, 0], [30, 70]],
            [[40, 0], [40, 70]],
            [[50, 0], [50, 70]],
            [[60, 0], [60, 70]],
            [[70, 0], [70, 70]]
        ])
    })

    it("gives the start and end coords for all the horizontal lines on the y-axis", function () {
        expect(grid.getLinesY()).toEqual([
            [[0,  0], [70,  0]],
            [[0, 10], [70, 10]],
            [[0, 20], [70, 20]],
            [[0, 30], [70, 30]],
            [[0, 40], [70, 40]],
            [[0, 50], [70, 50]]
        ])
    })

});

describe("Grid lines with starting positions", function () {

    var grid

    beforeEach(function () {
        grid = new Grid({
            cellSize: 10,
            xAmount: 7,
            yAmount: 5,
            xStart: 3,
            yStart: 4
        })
    })

    it("can set xStart and yStart", function () {
        expect(grid.xStart).toEqual(3)
        expect(grid.yStart).toEqual(4)
    })

    it("gives the start and end coords for all the vertical lines on the x-axis", function () {
        expect(grid.getLinesX()).toEqual([
            [[ 3, 4], [ 3, 74]],
            [[13, 4], [13, 74]],
            [[23, 4], [23, 74]],
            [[33, 4], [33, 74]],
            [[43, 4], [43, 74]],
            [[53, 4], [53, 74]],
            [[63, 4], [63, 74]],
            [[73, 4], [73, 74]]
        ])
    })

    it("gives the start and end coords for all the horizontal lines on the y-axis", function () {
        expect(grid.getLinesY()).toEqual([
            [[3,  4], [73,  4]],
            [[3, 14], [73, 14]],
            [[3, 24], [73, 24]],
            [[3, 34], [73, 34]],
            [[3, 44], [73, 44]],
            [[3, 54], [73, 54]]
        ])
    })

})

describe("Grid cells", function () {

    var grid

    beforeEach(function () {
        grid = new Grid({
            cellSize: 10,
            xAmount: 7,
            yAmount: 5
        })
    })

    it("can get coords for a cell", function () {
        const cellCoords = grid.getCellRect(4, 2)
        expect(cellCoords).toEqual([40, 20, 10, 10])
    })

})

describe("Grid cells with starting positions", function () {

    var grid

    beforeEach(function () {
        grid = new Grid({
            cellSize: 10,
            xAmount: 7,
            yAmount: 5,
            xStart: 3,
            yStart: 4
        })
    })

    it("can get coords for a cell", function () {
        const cellCoords = grid.getCellRect(4, 2)
        expect(cellCoords).toEqual([43, 24, 10, 10])
    })

})
