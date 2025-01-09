let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    let button = dropdown.querySelector('.dropdown__value');
    let list = dropdown.querySelector('.dropdown__list');
    
    button.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
    });
    
    list.addEventListener('click', function(event) {
        if (event.target.classList.contains('dropdown__link')) {
            button.textContent = event.target.textContent;
            list.classList.remove('dropdown__list_active');
        }
        event.preventDefault(); 
    });
});