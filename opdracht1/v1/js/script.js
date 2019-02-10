/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*MICROINTERACTIE 1 - de button veranderd van aan en uit*/
var buttons = document.querySelectorAll('button');
console.log(buttons);

function klikButton(event) {
	var geklikteAfbeelding = event.target;
	geklikteAfbeelding.classList.toggle('show');
}


function verwijderClass() {
	var alleImg = document.querySelectorAll('#images img');
	console.log(alleImg);
	for (var a = 0; a < alleImg.length; a++) {
		alleImg[a].classList.remove('show');
	}
}

function alleAfbeelding() {
	var alleImg = document.querySelectorAll('#images img');
	for (var j = 0; j < alleImg.length; j++) {
		alleImg[j].classList.toggle('show');
	}
}

function witAfbeelding() {
	var witImg = document.querySelectorAll('.wit');
	for (var b = 0; b < witImg.length; b++) {
		witImg[b].classList.toggle('show');
	}
}

function zwartAfbeelding() {
	var zwartImg = document.querySelectorAll('.zwart');
	for (var d = 0; d < zwartImg.length; d++) {
		zwartImg[d].classList.toggle('show');
	}
}

function paarsAfbeelding() {
	var paarsImg = document.querySelectorAll('.paars');
	for (var e = 0; e < paarsImg.length; e++) {
		paarsImg[e].classList.toggle('show');
	}
}

function blauwAfbeelding() {
	var blauwImg = document.querySelectorAll('.blauw');
	for (var f = 0; f < blauwImg.length; f++) {
		blauwImg[f].classList.toggle('show');
	}
}

function oranjeAfbeelding() {
	var oranjeImg = document.querySelectorAll('.oranje');
	for (var g = 0; g < oranjeImg.length; g++) {
		oranjeImg[g].classList.toggle('show');
	}
}

function groenAfbeelding() {
	var groenImg = document.querySelectorAll('.groen');
	for (var h = 0; h < groenImg.length; h++) {
		groenImg[h].classList.toggle('show');
	}
}


for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', klikButton);
	buttons[i].addEventListener('click', verwijderClass);
}

buttons[0].addEventListener('click', alleAfbeelding);
buttons[1].addEventListener('click', witAfbeelding);
buttons[2].addEventListener('click', zwartAfbeelding);
buttons[3].addEventListener('click', paarsAfbeelding);
buttons[4].addEventListener('click', blauwAfbeelding);
buttons[5].addEventListener('click', oranjeAfbeelding);
buttons[6].addEventListener('click', groenAfbeelding);
