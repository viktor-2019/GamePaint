const board = document.querySelector('#board');
let squareNumber = 4092;
const colors = ['#25ced1', '#ffffff', '#fctade', '#ff8f5b','#ea526f', '#5aa9t6' ]

for (let i = 0; i < squareNumber; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
  board.append(square);

}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor(element) {
  element.style.backgroundColor = '#222';
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  
  return colors[index];
}