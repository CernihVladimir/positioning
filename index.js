const progressBar = document.querySelector('.progress_line');

const duration = 3000;
const totalSteps = duration / 10;
const stepIncrement = 100 / totalSteps;

let width = 1;
let id = setInterval(load, 10);

function load() {
    if (width >= 100) {
        clearInterval(id);
    } else {
        width += stepIncrement;
        progressBar.style.width = width + "%";
    }
}