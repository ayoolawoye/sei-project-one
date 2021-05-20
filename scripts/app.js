function init() {

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('.startButton')
  const stopButton = document.querySelector('.stopButton')
  const currentScore = document.querySelector('.currentScore')

  let scoreCount = 0
  let timerID

  currentScore.innerHTML = scoreCount

  const width = 10
  const cellCount = width * width
  const cells = []

  const startingSnakePosition = 0
  let currentSnakePosition = 0
  const startingFoodPosition = 35
  let currentsnakeDirection = 'right'
  let currentFoodPosition
  let currentSnakeArray = [0]
  let currentSnakeLength = 1

  function createGrid(startingSnakePosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSnake(startingSnakePosition)
    newFoodPosition()
  }

  //Add and Remove Functions

  function addSnake(position) {
    cells[position].classList.add('snake') //says something is wrong here
  }
  function removeSnake(position) {
    cells[position].classList.remove('snake')
  }
  function addFood(position) {
    cells[position].classList.add('food')
  }
  function removeFood(position) {
    cells[position].classList.remove('food')
  }

  // * Snake Functions

  function handleKeyUp(event) {
    const key = event.keyCode

    removeSnake(currentSnakePosition)

    if (key === 39 && currentSnakePosition % width !== width - 1) {
      currentsnakeDirection = 'right'
    } else if (key === 37 && currentSnakePosition % width !== 0) {
      currentsnakeDirection = 'left'
    } else if (key === 38 && currentSnakePosition >= width) {
      currentsnakeDirection = 'up'
    } else if (key === 40 && currentSnakePosition + width <= width * width - 1) {
      currentsnakeDirection = 'down'
    } else {
      console.log('INVALID KEY')
    }

    addSnake(currentSnakePosition)
  }

  createGrid(startingSnakePosition)


  function snakeMovement() {

    timerID = setInterval(() => {
      eatFood()
      // removeSnake(currentSnakePosition)
      for (let index = currentSnakeArray.length - 1; index > currentSnakeArray.length - 1 - currentSnakeLength; index--) {
        console.log(currentSnakeArray[index])
        removeSnake(currentSnakeArray[index])
      }

      if (currentsnakeDirection === 'up') {
        currentSnakePosition = currentSnakePosition - width
        if (currentSnakePosition < 0) {
          stopGame()
        } else {
          currentSnakeArray.push(currentSnakePosition)
        }

      } else if (currentsnakeDirection === 'down') {
        currentSnakePosition = currentSnakePosition + width
        if (currentSnakePosition > width * width) {
          stopGame()
        } else {
          currentSnakeArray.push(currentSnakePosition)
        }

      } else if (currentsnakeDirection === 'left') {
        currentSnakePosition = currentSnakePosition - 1
        currentSnakeArray.push(currentSnakePosition)
      } else if (currentsnakeDirection === 'right') {
        currentSnakePosition = currentSnakePosition + 1
        currentSnakeArray.push(currentSnakePosition)
      }
      for (let index = currentSnakeArray.length - 1; index > currentSnakeArray.length - 1 - currentSnakeLength; index--) {
        console.log(currentSnakeArray[index])
        addSnake(currentSnakeArray[index])
      }

    }, 900)
  }

  //Food Functions

  function eatFood() {
    if (cells[currentSnakePosition].classList.contains('food')) {
      cells[currentFoodPosition].classList.remove('food')
      newFoodPosition()
      currentSnakeLength++
      scoreCount += 100
      currentScore.innerHTML = scoreCount
    }
  }

  function newFoodPosition() {
    let randomNumber = Math.floor(Math.random() * 100)
    currentFoodPosition = randomNumber
    cells[randomNumber].classList.add('food')

  }

  function increaseSpeed() {

  }



  //Start and Reset 

  function startGame() {
    snakeMovement(startingSnakePosition)
  }

  function stopGame() {
    clearInterval(timerID)
    window.prompt(`Game Over! Your score is ${scoreCount}!`)
  }


  //Event Listeners

  document.addEventListener('keyup', handleKeyUp)
  startButton.addEventListener('click', startGame)
  stopButton.addEventListener('click', stopGame)

}


window.addEventListener('DOMContentLoaded', init)