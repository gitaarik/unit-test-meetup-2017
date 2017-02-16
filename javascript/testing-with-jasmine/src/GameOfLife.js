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
        if (this.getAmountAliveNeighbours(coords) > 2) {
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
        for (let [xOffset, yOffset] of this.getAllOffsets()) {
            yield [
                coords[0] + xOffset,
                coords[1] + yOffset
            ]
        }
    }

    *getAllOffsets () {
        for (let xOffset of this.offsets) {
            for (let yOffset of this.offsets) {
                yield [xOffset, yOffset]
            }
        }
    }

}
