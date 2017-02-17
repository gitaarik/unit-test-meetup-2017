class GameOfLife {

    constructor () {
        this.grid = {}
        this.offsets = [-1, 0, 1]
    }

    setAlive (coords) {
       this.grid[coords] = true
    }

    isAlive (coords) {
        return Boolean(this.grid[coords])
    }
    
    nextFrame () {

        let newGrid = {}

        for (let coords of this.getAliveCoords()) {
            newGrid[coords] = this.getNextState(coords)
        }

        this.grid = newGrid

    }

    *getAliveCoords () {
        for (let coordsStr of Object.keys(this.grid)) {
            yield this.getCoordsFromStr(coordsStr)
        }
    }

    getCoordsFromStr (str) {
        return str.split(',').map(coord => parseInt(coord))
    }

    getNextState (coords) {

        const aliveNeighbours = this.getAmountAliveNeighbours(coords)

        if (aliveNeighbours > 1 && aliveNeighbours < 4) {
            return true
        }

    }

    getAmountAliveNeighbours (coords) {

        let amount = 0

        for (let neighbourCoords of this.getNeighbourCoords(coords)) {
            amount += +this.isAlive(neighbourCoords)
        }

        return amount

    }

    *getNeighbourCoords (coords) {
        for (let [xOffset, yOffset] of this.getNeighbourOffsets()) {
            yield [
                coords[0] + xOffset,
                coords[1] + yOffset
            ]
        }
    }

    *getNeighbourOffsets () {
        for (let xOffset of this.offsets) {
            for (let yOffset of this.offsets) {
                if (xOffset == 0 && yOffset == 0) continue
                yield [xOffset, yOffset]
            }
        }
    }

}
