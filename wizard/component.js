const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    prev.disabled = false;
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    next.disabled = false;
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }

        if (currentActive === circles.length) {
            next.disabled = true;
        }

        if (currentActive === 1) {
            prev.disabled = true;
        }
    });

    progress.style.width = ((currentActive - 1) / (circles.length - 1) * 100) + '%';
}