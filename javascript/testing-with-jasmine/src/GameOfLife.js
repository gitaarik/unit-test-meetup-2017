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

        for (let coords of this.getCoordsToRerender()) {
            newGrid[coords] = this.getNextState(coords)
        }

        this.grid = newGrid

    }

    *getCoordsToRerender () {
        for (let aliveCoords of this.getAliveCoords()) {
            yield aliveCoords
            for (let deadNeighbourCoords of this.getDeadNeighbourCoords(aliveCoords)) {
                yield deadNeighbourCoords
            }
        }
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

        if (aliveNeighbours == 3) {
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

    *getDeadNeighbourCoords (coords) {
        for (let neighbourCoords of this.getNeighbourCoords(coords)) {
            if (!this.isAlive(neighbourCoords)) yield neighbourCoords
        }
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
