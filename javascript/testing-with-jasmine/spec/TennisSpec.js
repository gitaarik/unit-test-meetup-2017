describe("Tennis", function () {

    var game

    beforeEach(function () {
        game = new Game()
    });

    it("Scores should be 0 from start", function () {
        expect(game.score).toEqual("Love - Love")
    })

    it("Player one scores a point --> Score: 15-0", function () {
        game.player1_score()
        expect(game.score).toEqual("Fifteen - Love");
    });

    it("Player two scores a point --> Score: 0-15", function () {
        game.player2_score()
        expect(game.score).toEqual("Love - Fifteen");
    });

    it("Player one and two score a point --> Score: 15-15", function () {
        game.player1_score()
        game.player2_score()
        expect(game.score).toEqual("Fifteen - Fifteen");
    });

    it("Player one scores 2 points --> Score: 30-0", function () {
        game.player1_score()
        game.player1_score()
        expect(game.score).toEqual("Thirty - Love");
    });

    it("Player one scores 2 points and player two 1 point --> Score: 30-15", function () {
        game.player1_score()
        game.player1_score()
        game.player2_score()
        expect(game.score).toEqual("Thirty - Fifteen");
    });

    it("Player one scores 1 points and player two 2 points --> Score: 15-30", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        expect(game.score).toEqual("Fifteen - Thirty");
    });

    it("Player two scores 2 points --> Score: 0-30", function () {
        game.player2_score()
        game.player2_score()
        expect(game.score).toEqual("Love - Thirty");
    });

    it("Player one scores 3 points --> Score: 40-0", function () {
        game.player1_score()
        game.player1_score()
        game.player1_score()
        expect(game.score).toEqual("Win for player1");
    });

    it("Player one scores 3 points and player two 1 point --> Score: 40-15", function () {
        game.player1_score()
        game.player1_score()
        game.player2_score()
        game.player1_score()
        expect(game.score).toEqual("Win for player1");
    });

    it("Player two scores 3 points --> Score: 0-40", function () {
        game.player2_score()
        game.player2_score()
        game.player2_score()
        expect(game.score).toEqual("Win for player2");
    });

    it("Player one scores 1 points and player two 3 point --> Score: 15-40", function () {
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player2_score()
        expect(game.score).toEqual("Win for player2");
    });

    it("Player one scores 3 points and player two 2 point --> Score: 40-30", function () {
        game.player1_score()
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        expect(game.score).toEqual("Advantage player1");
    });

    it("Player one scores 2 points and player two 3 point --> Score: 30-40", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player2_score()
        expect(game.score).toEqual("Advantage player2");
    });

    it("Player one scores 3 points and player two 3 point --> Score: 40-40", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player1_score()
        game.player2_score()
        expect(game.score).toEqual("Deuce");
    });

    it("Player one scores 3 points and player two 4 point --> Score: 40-50", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player1_score()
        game.player2_score()
        game.player2_score()
        expect(game.score).toEqual("Advantage player2");
    });

    it("Player one scores 4 points and player two 3 point --> Score: 50-40", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player1_score()
        game.player2_score()
        game.player1_score()
        expect(game.score).toEqual("Advantage player1");
    });

    it("Player one scores 4 points and player two 4 point --> Score: 50-50", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player1_score()
        game.player2_score()
        game.player1_score()
        game.player2_score()
        expect(game.score).toEqual("Deuce");
    });

    it("Player one scores 5 points and player two 3 point --> Score: 60-40", function () {
        game.player1_score()
        game.player2_score()
        game.player2_score()
        game.player1_score()
        game.player1_score()
        game.player2_score()
        game.player1_score()
        game.player1_score()
        expect(game.score).toEqual("Win for player1");
    });

});
