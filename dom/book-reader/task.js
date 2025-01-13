let book = document.getElementById('book');
let controls = book.querySelector('.book__controls');
let content = book.querySelector('.book__content');
let fontSize = 'font-size_active';

controls.addEventListener('click', function(event) {
    if (event.target.classList.contains('font-size')) {
        fontSize = event.target.classList[1];
        content.classList.remove(...content.classList.values());
        content.classList.add(fontSize);
        let buttons = document.querySelectorAll('.font-size');
        buttons.forEach(button => button.classList.remove('font-size_active'));
        event.target.classList.add('font-size_active');
    }
    event.preventDefault();     
});






















