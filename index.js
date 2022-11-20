// Game HTML elements

const gameInfo = document.getElementById('game-info')
const gameOptions = document.getElementById('game-options')

// Game functions

function createGameText(text) {
  const gameText = document.createElement('p')
  gameText.innerText = text
  gameInfo.appendChild(gameText)
}

function createOptionButton(text, destination) {
  const optionButton = document.createElement('button')
  optionButton.innerText = text
  optionButton.onclick = destination
  gameOptions.appendChild(optionButton)
}

function sceneCleanUp() {
  gameInfo.innerHTML = ''
  gameOptions.innerHTML = ''
}

// The game

function firstScene() {
  createGameText('First scene text')
  createOptionButton('First scene button 1', secondScene)
  createOptionButton('First scene button 2', thirdScene)
}

function secondScene() {
  sceneCleanUp()
  createGameText('Second scene text')
  createOptionButton('Second scene button 1', fourthScene)
  createOptionButton('Second scene button 2', fourthScene)
  createOptionButton('Second scene button 3', fourthScene)
  createOptionButton('Second scene button 4', fourthScene)
}

function thirdScene() {
  // empty, just an example
}

function fourthScene() {
  // empty, just an example
}

// Start the game

firstScene()
