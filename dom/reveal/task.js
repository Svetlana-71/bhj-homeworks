const blocks = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    blocks.forEach(block => {
        if (block.getBoundingClientRect().top <= window.innerHeight / 1.5) {
            block.classList.add('reveal_active');
        }
        else {
            block.classList.remove('reveal_active');
        }
    });
});

