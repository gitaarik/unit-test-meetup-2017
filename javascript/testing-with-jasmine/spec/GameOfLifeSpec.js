describe("GameOfLife", function () {

    var game

    beforeEach(function () {
        game = new GameOfLife()
    });

    it("can be alive", function () {
        game.setAlive([0, 0], true)
        expect(game.isAlive([0, 0])).toBeTruthy()
    })

    it("dies when it has no neighbours", function () {
        game.setAlive([0, 0], true)
        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeFalsy()
    })

    it("stays alive when 0,0 has 2 neighbours", function () {

        // 0,0
        game.setAlive([0, 0], true)

        // neighbours
        game.setAlive([0, 1], true)
        game.setAlive([1, 0], true)

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()

    })

    it("stays alive when 0,0 has 3 neighbours", function () {

        // 0,0
        game.setAlive([0, 0], true)

        // neighbours
        game.setAlive([1, 0], true)
        game.setAlive([0, 1], true)
        game.setAlive([1, 1], true)

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()

    })

    it("stays alive when 5,5 has 2 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()

    })

    it("stays alive when 5,5 has 3 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([6, 5], true)
        game.setAlive([5, 6], true)
        game.setAlive([6, 6], true)

        game.nextFrame()

        expect(game.isAlive([5, 5])).toBeTruthy()

    })

    it("dies when 5,5 has 4 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)
        game.setAlive([4, 5], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 5 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)
        game.setAlive([4, 5], true)
        game.setAlive([4, 4], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 6 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)
        game.setAlive([4, 5], true)
        game.setAlive([4, 4], true)
        game.setAlive([5, 4], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 7 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([5, 4], true)
        game.setAlive([5, 6], true)
        game.setAlive([6, 4], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)
        game.setAlive([4, 5], true)
        game.setAlive([4, 4], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("dies when 5,5 has 8 neighbours", function () {

        // 5,5
        game.setAlive([5, 5], true)

        // neighbours
        game.setAlive([5, 4], true)
        game.setAlive([5, 6], true)
        game.setAlive([6, 4], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)
        game.setAlive([4, 5], true)
        game.setAlive([4, 4], true)
        game.setAlive([4, 6], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()

    })

    it("comes to live when 0,0 has 3 neighbours", function () {

        // neighbours
        game.setAlive([0, 1], true)
        game.setAlive([1, 0], true)
        game.setAlive([1, 1], true)

        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()

    })

    it("comes to live when 5,5 has 3 neighbours", function () {

        // neighbours
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()

    })

    it("brings 2 coords (5,5 and 5.7) when they both have 3 neighbours", function () {

        // neighbours
        game.setAlive([6, 6], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 4], true)

        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()
        expect(game.isAlive([7, 5])).toBeTruthy()

    })

});
