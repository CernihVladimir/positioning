const progressBar = document.querySelector('.progress_line');
const duration = 3000;
const totalSteps = duration / 10;
const stepIncrement = 100 / totalSteps;

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtnInner = document.getElementById('closeModalBtnInner');
const modalOverlay = document.getElementById('modalOverlay');

let id = 0;

function openModal() {
    modalOverlay.classList.add('active');

    let width = 1;
    id = setInterval(load, 10);

    function load() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width += stepIncrement;
            progressBar.style.width = width + "%";
        }
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    clearInterval(id);
}

if (openModalBtn) openModalBtn.addEventListener('click', openModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (closeModalBtnInner) closeModalBtnInner.addEventListener('click', closeModal);


modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});
