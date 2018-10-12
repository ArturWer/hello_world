let sortButton = document.querySelector('.sortButton');
let resetButton = document.querySelector('.resetButton');
let userWords = [];

sortButton.addEventListener('click', function (e) {
	e.preventDefault();
	let userText = document.querySelector('textarea');
	setArrayWords(userText.value);
}, false);
resetButton.addEventListener('click', function (e) {
	e.preventDefault();
	let userText = document.querySelector('textarea');
	userText.value = '';
}, false);

function isSpace(text){
	if (text.length > 0) {
		let space = text.indexOf(' ');
		if (space === -1) return false;
		else if (space !== -1) return space;
	};
};

function setArrayWords(userText){
	if (userText.length > 0) {
		let space = userText.indexOf(' ');
		let word = "";
		if (isSpace !== -1) {
			word = userText.slice(userText[0], isSpace);
			userWords.push(word);

		} else if (isSpace === -1) {
			word = userText;
		};
		
		if (true) {}	
	};
};

function sort(){
	let newUserText = userText.slice(isSpace+1);
			if (newUserText.length > 0) {
				console.log(`New user text is: ${newUserText}`);
				setArrayWords(newUserText);
			};
};