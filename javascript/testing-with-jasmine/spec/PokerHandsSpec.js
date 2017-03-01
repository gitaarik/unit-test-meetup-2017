describe("PokerHands", function () {
    var pokerHands;

    beforeEach(function () {
        pokerHands = new PokerHands();
    });

    it("Four-of-a-kind should beat a Flush", function () {
        var cardsOfPlayerOne = "5 cards with four of the same value";//["Kd", "Kh", "Kc", "Ks", "8h"];
        var cardsOfPlayerTwo = "5 cards ";//["Ah", "Jh", "7h", "6h", "2h"];

        expect(pokerHands.compare(cardsOfPlayerOne, cardsOfPlayerTwo)).toEqual(-1);

    });


});
