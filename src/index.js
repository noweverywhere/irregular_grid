import IrregularGrid from './irregular_grid'
import 'normalize.css'

function component() {
  let element = document.createElement('div');
  const { innerWidth, innerHeight } = window.window
  const root = document.querySelector('#root')
  setInterval(() => {
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    IrregularGrid.new({ node: root })
  }, 200)
  const grid = IrregularGrid.new({ node: root })

  return element;
}

document.body.appendChild(component());
