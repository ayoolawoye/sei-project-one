function init() {
  console.log('CONTENT LOADED')

  const grid = document.querySelector('.grid')
  console.log(grid)
  const width = 10
  const cellCount = width * width
  const cells = []


  // const snakeClass = 'snake'
  // const snakeStartPosition = 0
  // let snakeCurrentPosition = 0


  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    // addSnake(snakeStartPosition)
  }

  // // * Add Cat to grid
  // function addsnake(position) {
  //   cells[position].classList.add(snakeClass)
  // }

  createGrid(snakeStartPosition)
}











window.addEventListener('DOMContentLoaded', init)