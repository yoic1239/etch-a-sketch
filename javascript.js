function randomColor() {
    return `rgb(${Math.floor(Math.random()*266)}, ${Math.floor(Math.random()*266)}, ${Math.floor(Math.random()*266)})`;
}

function createGrids(squarePerSide) {
    for (let i = 0; i < squarePerSide; i++) {
        const row = document.createElement('div');
        row.classList.add('row'); 
        container.appendChild(row);
    
        for (let j = 0; j < squarePerSide; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
    
            grid.addEventListener('mouseover', function() {
                grid.style.backgroundColor = randomColor();
            });
        }
    }
}

function clearGrids() {
    container.innerHTML = '';
}

const container = document.querySelector('.container');
const updateBtn = document.querySelector('.update-size');

createGrids(16);

updateBtn.addEventListener('click', function() {
    let squarePerSide = 0;
    do {
        squarePerSide = Number(prompt('Please enter the number of squares per side (Max: 100)'));
    } while (!Number.isInteger(squarePerSide) || squarePerSide < 1 || squarePerSide > 100);
    
    clearGrids();
    createGrids(squarePerSide);
});