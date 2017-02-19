class Grid {

    constructor (props) {
        this.cellSize = props.cellSize
        this.xAmount = props.xAmount
        this.yAmount = props.yAmount
        this.xStart = props.xStart || 0
        this.yStart = props.yStart || 0
    }

    getWidth () {
        return this.xStart + this.xAmount * this.cellSize
    }

    getHeight () {
        return this.yStart + this.yAmount * this.cellSize
    }

    getLinesX () {

        const coords = []
        const yEnd = this.getLinesYEnd()

        for (let offset of this.getLinesXOffsets()) {
            coords.push([
                [offset, this.yStart],
                [offset, yEnd]
            ])
        }

        return coords

    }

    getLinesYEnd () {
        return this.yStart + this.xAmount * this.cellSize
    }

    getLinesXOffsets () {
        return this.getLinesOffsets(this.xAmount, this.xStart)
    }

    getLinesY () {

        const coords = []
        const xEnd = this.getLinesXEnd()

        for (let offset of this.getLinesYOffsets()) {
            coords.push([
                [this.xStart, offset],
                [xEnd, offset]
            ])
        }

        return coords

    }

    getLinesXEnd () {
        return this.xStart + this.xAmount * this.cellSize
    }

    getLinesYOffsets () {
        return this.getLinesOffsets(this.yAmount, this.yStart)
    }

    *getLinesOffsets (amount, initialOffset) {
        for (let lineNo = 0; lineNo < amount + 1; lineNo++) {
            yield initialOffset + lineNo * this.cellSize
        }
    }

    getCellRect (xPos, yPos) {

        const x = this.xStart + xPos * this.cellSize
        const y = this.yStart + yPos * this.cellSize

        return [
            x, y,
            this.cellSize, this.cellSize
        ]

    }

}
