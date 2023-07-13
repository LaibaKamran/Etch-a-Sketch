const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

// Function to remove the existing grid
function removeGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

// Function to prompt the user for the number of squares per side
function promptUser() {
  const squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
  const gridSize = parseInt(squaresPerSide);

  // Validate the user input
  if (gridSize && gridSize > 0 && gridSize <= 100) {
    removeGrid();
    generateGrid(gridSize);
  } else {
    alert('Invalid input! Please enter a number between 1 and 100.');
  }
}

// Function to generate the new grid
function generateGrid(gridSize) {
  const squareSize = 100 / gridSize;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}%`;
      square.style.paddingBottom = `${squareSize}%`;
      container.appendChild(square);
    }
  }
}

// Add event listener to the reset button
resetButton.addEventListener('click', promptUser);

// Generate the initial grid
generateGrid(16);


// container.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = 'black';
//   });
  
//   container.addEventListener('mouseout', (event) => {
//     event.target.style.backgroundColor = 'gray';
//   });

let isDrawing = false; // Variable to track the drawing state

// Add a 'mousedown' event listener to start drawing
container.addEventListener('mousedown', () => {
  isDrawing = true;
});

// Add a 'mouseup' event listener to stop drawing
container.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Add a 'mouseover' event listener to change the color of the square when drawing
container.addEventListener('mouseover', (event) => {
  if (isDrawing) {
    event.target.style.backgroundColor = 'black';
  }
});

// container.addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('square')) {
//       event.target.style.backgroundColor = 'black';
//     }
//   });

// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         container.appendChild(square);
//     }
// }

