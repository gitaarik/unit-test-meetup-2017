describe("GameOfLife", function () {

    var game

    beforeEach(function () {
        game = new GameOfLife()
    });

    it("can set a cell alive", function () {
        game.setAlive([0, 0])
        expect(game.isAlive([0, 0])).toBeTruthy()
    })

    it("can set a cell dead", function () {
        game.setAlive([0, 0])
        game.setDead([0, 0])
        expect(game.isAlive([0, 0])).toBeFalsy()
    })

    it("returns correct alive cells", function () {

        game.setAlive([0, 0])
        game.setDead([0, 0])
        game.setAlive([1, 0])
        game.setAlive([0, 1])
        game.setAlive([1, 1])

        const aliveCells = []

        for (let aliveCell of game.getAliveCells()) {
            aliveCells.push(aliveCell)
        }

        expect(aliveCells.sort()).toEqual([
            [0, 1],
            [1, 0],
            [1, 1]
        ])

    })

    it("dies when it has no neighbours", function () {
        game.setAlive([0, 0])
        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeFalsy()
    })

    it("stays alive when 0,0 has 2 neighbours", function () {

        // 0,0
        game.setAlive([0, 0])

        // neighbours
        game.setAlive([0, 1])
        game.setAlive([1, 0])

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()

    })

    it("stays alive when 0,0 has 3 neighbours", function () {

        // 0,0
        game.setAlive([0, 0])

        // neighbours
        game.setAlive([1, 0])
        game.setAlive([0, 1])
        game.setAlive([1, 1])

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()

    })

    it("stays alive when 5,5 has 2 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([5, 6])
        game.setAlive([6, 5])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()

    })

    it("stays alive when 5,5 has 3 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([6, 5])
        game.setAlive([5, 6])
        game.setAlive([6, 6])

        game.nextFrame()

        expect(game.isAlive([5, 5])).toBeTruthy()

    })

    it("dies when 5,5 has 4 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([5, 6])
        game.setAlive([6, 5])
        game.setAlive([6, 6])
        game.setAlive([4, 5])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 5 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([5, 6])
        game.setAlive([6, 5])
        game.setAlive([6, 6])
        game.setAlive([4, 5])
        game.setAlive([4, 4])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 6 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([5, 6])
        game.setAlive([6, 5])
        game.setAlive([6, 6])
        game.setAlive([4, 5])
        game.setAlive([4, 4])
        game.setAlive([5, 4])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 7 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([5, 4])
        game.setAlive([5, 6])
        game.setAlive([6, 4])
        game.setAlive([6, 5])
        game.setAlive([6, 6])
        game.setAlive([4, 5])
        game.setAlive([4, 4])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 8 neighbours", function () {

        // 5,5
        game.setAlive([5, 5])

        // neighbours
        game.setAlive([5, 4])
        game.setAlive([5, 6])
        game.setAlive([6, 4])
        game.setAlive([6, 5])
        game.setAlive([6, 6])
        game.setAlive([4, 5])
        game.setAlive([4, 4])
        game.setAlive([4, 6])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("comes to live when 0,0 has 3 neighbours", function () {

        // neighbours
        game.setAlive([0, 1])
        game.setAlive([1, 0])
        game.setAlive([1, 1])

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()

    })

    it("doesn't come to live when 0,0 has only 2 neighbours", function () {

        // neighbours
        game.setAlive([0, 1])
        game.setAlive([1, 0])

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeFalsy()

    })

    it("doesn't come to live when 0,0 has only 1 neighbours", function () {
        game.setAlive([0, 1])
        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeFalsy()
    })

    it("comes to live when 5,5 has 3 neighbours", function () {

        // neighbours
        game.setAlive([5, 6])
        game.setAlive([6, 5])
        game.setAlive([6, 6])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()

    })

    it("brings 2 coords (5,5 and 5.7) when they both have 3 neighbours", function () {

        // neighbours
        game.setAlive([6, 6])
        game.setAlive([6, 5])
        game.setAlive([6, 4])

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()
        expect(game.isAlive([7, 5])).toBeTruthy()

    })

    it("returns the correct coords for the alive cells", function () {

        // neighbours
        game.setAlive([6, 4])
        game.setAlive([6, 5])
        game.setAlive([6, 6])

        game.nextFrame()

        const aliveCoords = []

        for (let coords of game.getAliveCoords()) {
            aliveCoords.push(coords)
        }

        expect(aliveCoords.sort()).toEqual([[5, 5], [6, 5], [7, 5]])

    })

    it("returns the correct coords to rerender", function () {

        game.setAlive([5, 5])

        const coordsToRerender = []

        for (let coords of game.getCoordsToRerender()) {
            coordsToRerender.push(coords)
        }

        expect(coordsToRerender.sort()).toEqual([
            [4, 4], [4, 5], [4, 6],
            [5, 4], [5, 5], [5, 6],
            [6, 4], [6, 5], [6, 6]
        ])

    })

    it("doesn't return the same coords to rerender more than once", function () {

        game.setAlive([5, 5])
        game.setAlive([6, 5])

        const coordsToRerender = []

        for (let coords of game.getUniqueCoordsToRerender()) {
            coordsToRerender.push(coords)
        }

        expect(coordsToRerender.sort()).toEqual([
            [4, 4], [4, 5], [4, 6],
            [5, 4], [5, 5], [5, 6],
            [6, 4], [6, 5], [6, 6],
            [7, 4], [7, 5], [7, 6]
        ])

    })

});


function createBoundariesTest(props) {

    const minX = props.minX
    const minY = props.minY
    const maxX = props.maxX
    const maxY = props.maxY

    return function () {

        let game

        beforeEach(function () {
            game = new GameOfLife({
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY
            })
        });

        it("can set min and max coords", function () {
            expect(game.minX).toEqual(minX)
            expect(game.minY).toEqual(minY)
            expect(game.maxX).toEqual(maxX)
            expect(game.maxY).toEqual(maxY)
        })

        it("can set coords inside the set range", function () {

            game.setAlive([minX, minY])
            expect(game.isAlive([minX, minY])).toBeTruthy()

            game.setAlive([minX + 3, minY + 3])
            expect(game.isAlive([minX + 3, minY + 3])).toBeTruthy()

            game.setAlive([maxX, maxY])
            expect(game.isAlive([maxX, maxY])).toBeTruthy()

        })

        it("cannot set coords outside of the range", function () {

            game.setAlive([minX - 1, minY])
            expect(game.isAlive([minX - 1, minY])).toBeFalsy()

            game.setAlive([minX, minY - 1])
            expect(game.isAlive([minX, minY - 1])).toBeFalsy()

            game.setAlive([maxX + 1, maxY])
            expect(game.isAlive([maxX + 1, maxY])).toBeFalsy()

            game.setAlive([maxX, maxY + 1])
            expect(game.isAlive([maxX, maxY + 1])).toBeFalsy()

        })

        it("won't make coords outside the range (x-underflow) alive", function () {

            game.setAlive([minX, minY])
            game.setAlive([minX, minY + 1])
            game.setAlive([minX, minY + 2])

            game.nextFrame()

            expect(game.isAlive([minX - 1, minY + 1])).toBeFalsy()

        })

        it("won't make coords outside the range (y-underflow) alive", function () {

            game.setAlive([minX, minY])
            game.setAlive([minX + 1, minY])
            game.setAlive([minX + 2, minY])

            game.nextFrame()

            expect(game.isAlive([minX + 1, minY - 1])).toBeFalsy()

        })

    }

}

describe(
    "GameOfLife with boundaries",
    createBoundariesTest({
        minX: 2,
        minY: 3,
        maxX: 10,
        maxY: 8
    })
)

/*describe(
    "GameOfLife with boundaries where min boundaries are 0",
    createBoundariesTest({
        minX: 0,
        minY: 0,
        maxX: 10,
        maxY: 8
    })
)*/
