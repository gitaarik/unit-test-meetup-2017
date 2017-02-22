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
        game.setAlive([6, 6])
        game.setAlive([6, 5])
        game.setAlive([6, 4])

        game.nextFrame()

        const aliveCoords = []

        for (let coords of game.getAliveCoords()) {
            aliveCoords.push(coords)
        }

        expect(aliveCoords).toEqual([[5, 5], [7, 5]])

    })

});

describe("GameOfLife with boundaries", function () {

    var game

    beforeEach(function () {
        game = new GameOfLife({
            minX: 2,
            minY: 3,
            maxX: 10,
            maxY: 8
        })
    });

    it("can set min and max coords", function () {
        expect(game.minX).toEqual(2)
        expect(game.minY).toEqual(3)
        expect(game.maxX).toEqual(10)
        expect(game.maxY).toEqual(8)
    })

    it("can set coords inside the set range", function () {

        game.setAlive([2, 3])
        expect(game.isAlive([2, 3])).toBeTruthy()

        game.setAlive([3, 4])
        expect(game.isAlive([3, 4])).toBeTruthy()

        game.setAlive([5, 5])
        expect(game.isAlive([5, 5])).toBeTruthy()

        game.setAlive([10, 8])
        expect(game.isAlive([10, 8])).toBeTruthy()

    })

    it("cannot set coords outside of the range", function () {

        game.setAlive([1, 3])
        expect(game.isAlive([1, 3])).toBeFalsy()

        game.setAlive([2, 2])
        expect(game.isAlive([2, 2])).toBeFalsy()

        game.setAlive([11, 2])
        expect(game.isAlive([11, 2])).toBeFalsy()

        game.setAlive([3, 9])
        expect(game.isAlive([3, 9])).toBeFalsy()

        game.setAlive([0, 0])
        expect(game.isAlive([0, 0])).toBeFalsy()

    })

    it("won't make coords outside the range (x-underflow) alive", function () {

        game.setAlive([2, 3])
        game.setAlive([2, 4])
        game.setAlive([2, 5])

        game.nextFrame()

        expect(game.isAlive([1, 4])).toBeFalsy()

    })

    it("won't make coords outside the range (y-underflow) alive", function () {

        game.setAlive([2, 3])
        game.setAlive([3, 3])
        game.setAlive([4, 3])

        game.nextFrame()

        expect(game.isAlive([3, 2])).toBeFalsy()

    })

})
