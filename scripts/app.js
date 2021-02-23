function init() {

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('.startButton')
  const resetButton = document.querySelector('.resetButton')
  const currentScore = document.querySelector('.currentScore')

  let scoreCount = 0

  currentScore.innerHTML = scoreCount

  const width = 10
  const cellCount = width * width
  const cells = []

  const startingSnakePosition = 0
  let currentSnakePosition = 0
  const startingFoodPosition = 35

  function createGrid(startingSnakePosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSnake(startingSnakePosition)
    addFood(startingFoodPosition)
  }

  function addSnake(position) {
    cells[position].classList.add('snake')
  }

  function removeSnake(position) {
    cells[position].classList.remove('snake')
  }

  function addFood(position) {
    cells[position].classList.add('food')
  }


  // * Move Snake

  function handleKeyUp(event) {
    const key = event.keyCode

    removeSnake(currentSnakePosition)

    if (key === 39 && currentSnakePosition % width !== width - 1) {
      currentSnakePosition++
    } else if (key === 37 && currentSnakePosition % width !== 0) {
      currentSnakePosition--
    } else if (key === 38 && currentSnakePosition >= width) {
      currentSnakePosition -= width
    } else if (key === 40 && currentSnakePosition + width <= width * width - 1) {
      currentSnakePosition += width
    } else {
      console.log('INVALID KEY')
    }

    addSnake(currentSnakePosition)
  }

  // * Event listeners
  document.addEventListener('keyup', handleKeyUp)


  createGrid(startingSnakePosition)


  // function snakeMovement() {
  //   let timerID = setInterval(() => {
  //     console.log('here')
  //     remove snake from old class
  //     if currentdirection = north(snake position - width), east etc
  //     update position -
  //       add snake class back in

  //   }, 1000)
  // }
  // snakeMovement()


  // function startGame() {
  // snake starts moving from starting position
  // current score starts from  0
  // }

  // function resetGame() {
  //   snake starts moving from starting position
  //   current score resets to 0
  // }

  // function currentScore() {
  //   when snake class === food class
  //   add 100 to current score
  // }
  // function snakeMovement() {

  // }

  // function newFoodPosition() {
  //   let randomNumber = Math.floor(Math.random() * 24)
  // when 
  // addFood[randomNumber].classList.add
  // }

  // startButton.addEventListener('click', startGame)
  // resetButton.addEventListener('click', resetGame)



}


window.addEventListener('DOMContentLoaded', init)