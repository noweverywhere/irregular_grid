class GridRow {
  constructor({ gridWidth, rowElementWidth }) {
    this.node = document.createElement('div')
    this.node.classList.add('row')
    this.gridWidth = gridWidth
    this.calcBase(rowElementWidth)
    this.node.style.width = `${gridWidth + this.elementWidth * 3}px`
    this.node.style['margin-left'] = `-${Math.round(Math.random() * this.elementWidth + this.elementWidth / 2)}px`
    console.log(`${Math.round(Math.random() * this.elementWidth + 2 * this.elementWidth)}px`)
    debugger
    this.addElements({ gridWidth: gridWidth, elementWidth: this.elementWidth })
  }

  calcBase(rowElementWidth) {
    this.elementWidth = Math.round(
      rowElementWidth.min + rowElementWidth .max * Math.random()
    )
  }

  addElements({gridWidth, elementWidth}) {
    const numberOfElements = Math.ceil(Math.floor(gridWidth / elementWidth) /2) + 1
    const fragment = document.createDocumentFragment()
    this.elements = new Array(numberOfElements).fill(null).map((_el, index) => {
      const element = document.createElement('div')
      element.classList.add('row_element')

      element.style.width = `${elementWidth}px`
      element.style['margin-right'] = `${elementWidth}px`

      fragment.appendChild(element)
    })
    this.node.appendChild(fragment)
  }
}

class IrregularGrid {
  constructor({ node }) {
    const width = node.clientWidth
    this.width = width
    this.height = this.clientHeight
    this.baseNode = node

    this.baseNumbers = this.calcBase({ width })
    this.firstFrame()
  }

  calcBase({ width }) {
    return {
      gridWidth: width,
      rowElementWidth: { min: 10, max: this.width/4 },
    }
  }

   firstFrame() {
    this.baseNode.style.overflow = 'hidden'
    this.rows = [
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
      new GridRow(this.baseNumbers),
    ];
    this.rows.forEach((row) => {
      this.baseNode.appendChild(row.node)
    })
  }
}

export default {
  new: (args) => {
    return new IrregularGrid(args)
  }
}
