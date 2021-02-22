function init() {

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('.startButton')
  const resetButton = document.querySelector('.resetButton')
  const currentScore = document.querySelector('.currentScore')

  let scoreCount = 0

  currentScore.innerHTML = scoreCount

  const width = 10
  const cellCount = width * width




  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)

    }
  }

  createGrid()

  // function startGame() {

  // }

  // function resetGame() {

  // }

  // function currentScore() {

  // }

  // startButton.addEventListener('click', startGame)
  // resetButton.addEventListener('click', resetGame)



}


window.addEventListener('DOMContentLoaded', init)