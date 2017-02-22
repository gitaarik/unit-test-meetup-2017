class Game {

    constructor () {

        this.gridTable = document.getElementById('grid')
        this.cellAmountX = 70
        this.cellAmountY = 32
        this.game = new GameOfLife({
            minX: 0,
            minY: 0,
            maxX: this.cellAmountX,
            maxY: this.cellAmountY
        })

        this.createCells()

        this.initRunButton()
        this.initStepButton()

    }

    createCells () {

        for (let y = 0; y < this.cellAmountY; y++) {

            const row = document.createElement('tr')
            this.gridTable.appendChild(row)

            for (let x = 0; x < this.cellAmountX; x++) {
                this.createCell(row, x, y)
            }

        }

    }

    createCell (row, x, y) {
        const cell = document.createElement('td')
        cell.setAttribute('data-coords', this.serializeCoords([x, y]))
        cell.addEventListener('click', event => this.cellClicked(event))
        row.appendChild(cell)
    }

    serializeCoords (coords) {
        return 'x' + coords[0] + 'y' + coords[1]
    }

    deserializeCoords (coordsStr) {
        return coordsStr.substr(1).split('y')
    }

    cellClicked (event) {

        const coords = this.deserializeCoords(event.target.getAttribute('data-coords'))

        if (this.game.isAlive(coords)) {
            this.game.setDead(coords)
        } else {
            this.game.setAlive(coords)
        }

        this.redraw()

    }

    redraw () {
        for (let y = 0; y < this.cellAmountY; y++) {
            for (let x = 0; x < this.cellAmountX; x++) {
                this.setCellState([x, y])
            }
        }
    }

    setCellState (coords) {

        const cell = this.getCell(coords)

        if (this.game.isAlive(coords)) {
            cell.classList.add('alive')
        } else {
            cell.classList.remove('alive')
        }

    }

    getCell (coords) {
        return this.gridTable.querySelector(
            'td[data-coords=' + this.serializeCoords(coords) + ']'
        )
    }

    initRunButton () {
        const button = document.getElementById('run')
        button.addEventListener('click', () => this.run())
    }

    initStepButton () {
        const button = document.getElementById('step')
        button.addEventListener('click', () => this.step())
    }

    progressFrame () {
        this.game.nextFrame()
        this.redraw()
    }

    step () {
        this.running = false
        this.progressFrame()
    }

    run () {

        this.running = true

        const runLoop = () => {
            if (this.running) {
                this.progressFrame()
                setTimeout(runLoop, 100)
            }
        }

        runLoop()

    }

}

new Game()
