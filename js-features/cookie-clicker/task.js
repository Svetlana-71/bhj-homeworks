const cookieId = document.getElementById('cookie');
const clicker__counterId = document.getElementById('clicker__counter');

let counter = 0;

cookieId.addEventListener('click', function() {
	counter++;
	clicker__counterId.textContent = counter;
	if (counter % 2 === 1) {
		cookieId.width = '210';
	} else {
		cookieId.width = '200';
	}
});