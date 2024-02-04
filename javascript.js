const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row'); 
    container.appendChild(row);

    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        row.appendChild(grid);

        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = randomColor();
        });
    }
}

function randomColor() {
    return `rgb(${Math.floor(Math.random()*266)}, ${Math.floor(Math.random()*266)}, ${Math.floor(Math.random()*266)})`;
}