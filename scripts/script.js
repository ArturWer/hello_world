let sortButton = document.querySelector('button');

sortButton.addEventListener('click', function (e) {
	e.preventDefault();
	let userText = document.querySelector('textarea');
	console.log(userText.value);
}, false);

