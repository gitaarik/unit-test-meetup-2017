class Game {

    constructor () {
        this.players = [null, "Love", "Love"]
        this.setScore()
    }

    setScore () {
        this.score = this.players[1] + " - " + this.players[2]
    }

    playerScore (playerNo) {
        if (this.score === "Advantage player" + this.otherPlayerNo(playerNo)) {
            this.score = "Deuce"
        } else if (this.score === "Advantage player" + playerNo) {
            this.score = "Win for player" + playerNo
        } else {
            if (this.players[playerNo] === "Fifteen") {
                this.players[playerNo] = "Thirty"
                this.setScore()
            } else if (this.players[playerNo] === "Thirty") {
                if (this.otherPlayer(playerNo) === "Thirty") {
                    this.score = "Advantage player" + playerNo
                } else {
                    this.score = "Win for player" + playerNo
                }
            } else {
                this.players[playerNo] = "Fifteen"
                this.setScore()
            }
        }
    }

    otherPlayerNo (playerNo) {
        if (playerNo === 1) {
            return 2
        } else {
            return 1
        }
    }

    otherPlayer (playerNo) {
        return this.players[this.otherPlayerNo(playerNo)]
    }

    player1_score () {
        this.playerScore(1)
    }

    player2_score () {
        this.playerScore(2)
    }

}
