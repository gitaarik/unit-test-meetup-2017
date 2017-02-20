class Game {

    constructor () {

        this.gridTable = document.getElementById('grid')
        this.cellAmountX = 56
        this.cellAmountY = 13
        this.game = new GameOfLife()

        this.createCells()

        this.initNextFrameButton()

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
        this.game.setAlive(coords)
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

    initNextFrameButton () {
        const button = document.getElementById('next-frame')
        button.addEventListener('click', event => this.progressFrame())
    }

    progressFrame () {
        this.game.nextFrame()
        this.redraw()
    }

}

new Game()
