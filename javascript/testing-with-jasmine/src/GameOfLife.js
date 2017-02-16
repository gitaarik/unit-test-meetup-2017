class GameOfLife {

    constructor () {
        this.grid = {}
        this.offsets = [-1, 0, 1]
    }

    setAlive (coords) {
       this.grid[coords] = true
    }

    isAlive (coords) {
        return this.grid[coords]
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

        let aliveNeighbours = 0

        for (let [x, y] of this.getNeighbourCoords(coords)) {
            if (this.isAlive([x, y])) {
                aliveNeighbours++
            }
        }

        return aliveNeighbours

    }

    *getNeighbourCoords (coords) {
        for (let xOffset of this.offsets) {
            for (let yOffset of this.offsets) {
                yield [
                    coords[0] + xOffset,
                    coords[1] + yOffset
                ]
            }
        }
    }

}
