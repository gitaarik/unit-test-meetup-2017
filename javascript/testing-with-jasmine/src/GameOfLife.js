class GameOfLife {

    constructor (props) {

        this.grid = {}
        this.offsets = [-1, 0, 1]

        if (props) {
            this.minX = props.minX
            this.minY = props.minY
            this.maxX = props.maxX
            this.maxY = props.maxY
        }

    }

    setAlive (coords) {
        this.setCellState(coords, true)
    }

    setDead (coords) {
        this.setCellState(coords, false)
    }

    setCellState (coords, state) {
        if (this.isValidCoords(coords)) {
            this.grid[coords] = state
        }
    }

    isValidCoords (coords) {
        if (
            this.minX && coords[0] < this.minX
            || this.minY && coords[1] < this.minY
            || this.maxX && coords[0] > this.maxX
            || this.maxY && coords[1] > this.maxY
        ) {
            return false
        } else {
            return true
        }
    }

    isAlive (coords) {
        return Boolean(this.grid[coords])
    }
    
    nextFrame () {

        const newGrid = {}

        for (let coords of this.getUniqueCoordsToRerender()) {
            newGrid[coords] = this.getNextState(coords)
        }

        this.grid = newGrid

    }

    *getUniqueCoordsToRerender () {

        const yielded = []

        for (let coords of this.getCoordsToRerender()) {
            if (yielded.indexOf(coords.toString()) == -1) {
                yield coords
                yielded.push(coords.toString())
            }
        }

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
            const coords = this.getCoordsFromStr(coordsStr)
            if (this.isAlive(coords)) {
                yield coords
            }
        }
    }

    getCoordsFromStr (str) {
        return str.split(',').map(coord => parseInt(coord))
    }

    getNextState (coords) {
        if (this.isAlive(coords)) {
            return this.canLiveOn(coords)
        } else {
            return this.comesToLife(coords)
        }
    }

    canLiveOn (coords) {

        const aliveNeighbours = this.getAmountAliveNeighbours(coords)

        if (aliveNeighbours > 1 && aliveNeighbours < 4) {
            return true
        } else {
            return false
        }

    }

    comesToLife (coords) {
        return this.getAmountAliveNeighbours(coords) == 3
    }

    getAmountAliveNeighbours (coords) {

        let amount = 0

        for (let neighbourCoords of this.getNeighbourCoords(coords)) {
            amount += +this.isAlive(neighbourCoords)
        }

        return amount

    }

    *getDeadNeighbourCoords (coords) {
        for (let neighbourCoords of this.getValidNeighbourCoords(coords)) {
            if (!this.isAlive(neighbourCoords)) yield neighbourCoords
        }
    }

    *getValidNeighbourCoords (coords) {
        for (let neighbourCoords of this.getNeighbourCoords(coords)) {
            if (this.isValidCoords(neighbourCoords)) {
                yield neighbourCoords
            }
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
