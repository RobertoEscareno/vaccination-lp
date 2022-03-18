var items = document.querySelectorAll('.stripe-04 .row');

function toggleShow() {
    this.classList.toggle('hidden-paragraph');
}

items.forEach(e => e.addEventListener('click', toggleShow));