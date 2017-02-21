describe("GameOfLife", function () {

    var game

    beforeEach(function () {
        game = new GameOfLife()
    });

    it("can set a cell alive", function () {
        game.setAlive([0, 0])
        expect(game.isAlive([0, 0])).toBeTruthy()
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

});
