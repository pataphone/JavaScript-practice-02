const grid = document.getElementById('grid')
const regenerate = document.getElementById('regenerate')
const clear = document.getElementById('clear')

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColors() {
    grid.innerHTML = ''
    for (let i = 0; i < 30; i++) {
        const block = document.createElement("div");
        const color = randomColor()
        block.style.backgroundColor = color
        block.innerText = color;
        block.classList.add('block')
        block.addEventListener('click', () => navigator.clipboard.writeText(block.innerText))
        grid.appendChild(block);
    }
}

regenerate.addEventListener('click', generateColors)
clear.addEventListener('click', () => grid.innerHTML = '')

generateColors()