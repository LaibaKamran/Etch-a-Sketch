const container = document.getElementById('container');

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

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

