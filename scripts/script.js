let sortButton = document.querySelector('.sortButton');
let resetButton = document.querySelector('.resetButton');

sortButton.addEventListener('click', function (e) {
	e.preventDefault();
	let userText = document.querySelector('textarea');
	console.log(userText.value);
}, false);
resetButton.addEventListener('click', function (e) {
	e.preventDefault();
	let userText = document.querySelector('textarea');
	userText.value = '';
}, false);

