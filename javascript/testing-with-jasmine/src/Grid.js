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
        const yEnd = this.getYEnd()

        for (let offset of this.getXOffsets()) {
            coords.push([
                [offset, this.yStart],
                [offset, yEnd]
            ])
        }

        return coords

    }

    getYEnd () {
        return this.yStart + this.xAmount * this.cellSize
    }

    getXOffsets () {
        return this.getOffsets(this.xAmount, this.xStart)
    }

    getLinesY () {

        const coords = []
        const xEnd = this.getXEnd()

        for (let offset of this.getYOffsets()) {
            coords.push([
                [this.xStart, offset],
                [xEnd, offset]
            ])
        }

        return coords

    }

    getXEnd () {
        return this.xStart + this.xAmount * this.cellSize
    }

    getYOffsets () {
        return this.getOffsets(this.yAmount, this.yStart)
    }

    *getOffsets (amount, initialOffset) {
        for (let lineNo = 0; lineNo < amount + 1; lineNo++) {
            yield initialOffset + lineNo * this.cellSize
        }
    }

}
