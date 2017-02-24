class Game {

    constructor () {

        this.gridTable = document.getElementById('grid')
        this.cellAmountX = 70
        this.cellAmountY = 31
        this.game = new GameOfLife({
            minX: 0,
            minY: 0,
            maxX: this.cellAmountX,
            maxY: this.cellAmountY
        })
        this.mouseIsDown = false

        this.createCells()

        this.initMouseDown()
        this.initRunButton()
        this.initStepButton()
        this.initClearButton()

    }

    createCells () {

        for (let y = 0; y <= this.cellAmountY; y++) {

            const row = document.createElement('tr')
            this.gridTable.appendChild(row)

            for (let x = 0; x <= this.cellAmountX; x++) {
                this.createCell(row, x, y)
            }

        }

    }

    createCell (row, x, y) {
        const cell = document.createElement('td')
        cell.setAttribute('data-coords', this.serializeCoords([x, y]))
        cell.addEventListener('click', event => this.cellClicked(event))
        cell.addEventListener('mouseover', event => this.cellHovered(event))
        row.appendChild(cell)
    }

    serializeCoords (coords) {
        return 'x' + coords[0] + 'y' + coords[1]
    }

    deserializeCoords (coordsStr) {
        return coordsStr.substr(1).split('y')
    }

    cellClicked (event) {

        const coords = this.getCellCoords(event.target)

        if (this.game.isAlive(coords)) {
            this.game.setDead(coords)
        } else {
            this.game.setAlive(coords)
        }

        this.redraw()

    }

    cellHovered (event) {
        if (this.mouseIsDown) {
            const coords = this.getCellCoords(event.target)
            this.game.setAlive(coords)
            this.redraw()
        }
    }

    getCellCoords (element) {
        return this.deserializeCoords(element.getAttribute('data-coords'))
    }

    redraw () {

        this.gridTable.querySelectorAll('td').forEach(element => {
            element.classList.remove('alive')
        })

        for (let aliveCell of this.game.getAliveCells()) {
            this.getCell(aliveCell).classList.add('alive')
        }

    }

    getCell (coords) {
        return this.gridTable.querySelector(
            'td[data-coords=' + this.serializeCoords(coords) + ']'
        )
    }

    initMouseDown () {

        document.addEventListener('mousedown', () => {
            this.mouseIsDown = true
        })

        document.addEventListener('mouseup', () => {
            this.mouseIsDown = false
        })

    }

    initRunButton () {
        const button = document.getElementById('run')
        button.addEventListener('click', () => this.run())
    }

    initStepButton () {
        const button = document.getElementById('step')
        button.addEventListener('click', () => this.step())
    }

    initClearButton () {
        const button = document.getElementById('clear')
        button.addEventListener('click', () => this.clear())
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

    clear () {
        this.game.clear()
        this.redraw()
    }

}

new Game()
