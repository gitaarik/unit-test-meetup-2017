class Game {

    constructor () {

        this.gridEl = document.getElementById('grid')
        this.cellsEl = document.getElementById('cells')
        this.gridCtx = this.gridEl.getContext('2d')
        this.cellsCtx = this.cellsEl.getContext('2d')

        this.initialize()

    }

    initialize () {
        this.createGrid()
        this.gridEl.width = this.grid.getWidth() + 1
        this.gridEl.height = this.grid.getHeight() + 1
        this.drawGridLines()
        this.drawCells()

    }

    createGrid () {
        this.grid = new Grid({
            cellSize: 25,
            xAmount: 76,
            yAmount: 22,
            xStart: 1,
            yStart: 1
        })
    }

    drawGridLines () {

        for (let coords of this.grid.getLinesX()) {
            this.gridCtx.beginPath()
            this.gridCtx.moveTo(coords[0][0], coords[0][1])
            this.gridCtx.lineTo(coords[1][0], coords[1][1])
            this.gridCtx.stroke()
        }

        for (let coords of this.grid.getLinesY()) {
            this.gridCtx.beginPath()
            this.gridCtx.moveTo(coords[0][0], coords[0][1])
            this.gridCtx.lineTo(coords[1][0], coords[1][1])
            this.gridCtx.stroke()
        }

    }

    drawCells () {
        this.cellsCtx.fillRect.apply(this.gridCtx, this.grid.getCellRect(5, 5))
    }

}

new Game()
