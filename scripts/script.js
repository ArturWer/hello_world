let sortButton = document.querySelector('.sortButton');
let resetButton = document.querySelector('.resetButton');
let userWords = [];

sortButton.addEventListener('click', function (e) {
	e.preventDefault();
	userWords = [];
	let userText = document.querySelector('textarea');
	sort(userText.value);
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

function divideWords(text, space){
	let firstWord = text.slice(0, space);
	userWords.push(firstWord);
	let anotherText = text.slice(space+1); 
	if (!String.prototype.trim) {
	  	String.prototype.trim = function () {
	    	return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	  };
	};
	sort(anotherText);
};

function sort(text){
	text = text.trim();
	text = replaceSpecialSymbols(text);
	let space = isSpace(text);
	if (space) {
		divideWords(text, space);
	} else {
		userWords.push(text);
		let newText = userWords.sort();
		console.log(newText);
		newText = newText.join(' ');
		document.querySelector('textarea').value = newText;
		console.log(newText);
	};
};
function replaceSpecialSymbols(text){
	let str = text.replace(',',' ');
	str = str.replace('\.',' ');
	str = str.replace('\/',' ');
	str = str.replace('\'',' ');
	str = str.replace('\"',' ');
	str = str.replace('\)',' ');
	str = str.replace('\(',' ');
	str = str.replace('\n',' ');
	str = str.replace('\;',' ');
	str = str.replace('\:',' ');
	str = str.replace('\{',' ');
	str = str.replace('\}',' ');
	str = str.replace('\+',' ');
	str = str.replace('\=',' ');
	str = str.replace('\<',' ');
	str = str.replace('\>',' ');
	return str;
};