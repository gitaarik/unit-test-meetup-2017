describe("GameOfLife", function () {

    var game

    beforeEach(function () {
        game = new GameOfLife()
    });

    it("can set alive", function () {
        game.setAlive([0, 0], true)
        expect(game.isAlive([0, 0])).toBeTruthy()
    })

    it("dies when it has fewer than two live neighbours", function () {
        game.setAlive([0, 0], true)
        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeFalsy()
    })

    it("stays alive when 0,0 has 2 neighbours", function () {
        game.setAlive([0, 0], true)
        game.setAlive([0, 1], true)
        game.setAlive([1, 0], true)
        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()
    })

    it("stays alive when 0,0 has 3 neighbours", function () {
        game.setAlive([0, 0], true)
        game.setAlive([1, 0], true)
        game.setAlive([0, 1], true)
        game.setAlive([1, 1], true)
        game.nextFrame()
        expect(game.isAlive([0, 0])).toBeTruthy()
    })

    it("stays alive when 5,5 has 2 neighbours", function () {
        game.setAlive([5, 5], true)
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)
        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()
    })

    it("stays alive when 5,5 has 3 neighbours", function () {
        game.setAlive([5, 5], true)
        game.setAlive([6, 5], true)
        game.setAlive([5, 6], true)
        game.setAlive([6, 6], true)
        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeTruthy()
    })

    it("dies when 5,5 has 4 neighbours", function () {
        game.setAlive([5, 5], true)
        game.setAlive([5, 6], true)
        game.setAlive([6, 5], true)
        game.setAlive([6, 6], true)
        game.setAlive([4, 5], true)
        game.nextFrame()
        expect(game.isAlive([5, 5])).toBeFalsy()
    })

});
