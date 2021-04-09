let gridSize = 16;
const defaultColor = "gray"
let paintingColor = defaultColor

const container = document.querySelector('.container')


let createGrid = () => {
   container.setAttribute('style', `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`)

   for (let i=0; i<gridSize*gridSize;i++) {
      let gridCell = document.createElement('div');
      gridCell.classList.add('grid-cell');
      gridCell.addEventListener('mouseenter', () => {
         gridCell.style.backgroundColor = paintingColor
      })
      container.appendChild(gridCell)
   }
}

let paint = () => {
   createGrid();

   const cells = [...document.querySelectorAll('.grid-cell')];

   const resetBtn = document.querySelector('.reset-btn');
   resetBtn.addEventListener('click', () => {
      cells.forEach(cell => {
         cell.style.backgroundColor = "white";
         cell.addEventListener("mouseenter", () => {
            paintingColor = defaultColor
         })
      })
      chooseColorBtn.value = "#cc75d1";
   })


   const defaultBtn = document.querySelector('.default-btn');
   defaultBtn.addEventListener('click', () => {
      cells.forEach(cell => cell.addEventListener('mouseenter', () => {
         paintingColor = defaultColor
      }))
   })


   const randomBtn = document.querySelector('.random-btn');
   randomBtn.addEventListener('click', () => {
      cells.forEach(cell => cell.addEventListener('mouseenter', () => {
         paintingColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)} ,${Math.floor(Math.random() * 256)} )`
      }))
   })

   const chooseColorBtn = document.querySelector('#color-picker');
   chooseColorBtn.addEventListener('change', () => {
      let color = chooseColorBtn.value
      cells.forEach(cell => cell.addEventListener('mouseenter', () => {
         paintingColor = color
      }))
   })
}
paint();


const slider = document.querySelector('#slider');
const gridSizeValue = document.querySelector('.grid-size-value');

slider.addEventListener('change', () => {
   let value = slider.value;
   gridSizeValue.textContent = value;
   gridSize = value;
   paintingColor = defaultColor
   removeCells(container);
   paint();
})


let removeCells = (parent) => {
   while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}