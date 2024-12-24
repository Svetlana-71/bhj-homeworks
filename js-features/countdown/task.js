let second = 59;

const timerId = setInterval(function() {
	second--;
	document.getElementById("timer").innerHTML = second;
	if (second === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}
}, 1000);

/*задача 2
let seconds = 15900;
let alltime = 15900;
let hours = Math.floor(seconds / 3600);
seconds %= 3600;
let minutes = Math.floor(seconds / 60);
seconds %= 60;

document.getElementById("timer").innerHTML = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

function padZero(num) {
	return String(num).padStart(2, '0');
}

const timersId = setInterval(function() {
	alltime--;

	document.getElementById("timer").innerHTML = `${padZero(Math.floor(alltime / 3600))}:${padZero(Math.floor(alltime % 3600 / 60))}:${padZero(alltime % 60)}`;
	if (alltime === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(timersId);
	}
}, 1000);*/